import React, {useEffect, useState} from "react";
import WorkerPage from "layouts/Errors/503";
import {useMountEffect} from "hooks/useMountEffect";
import Loader from "ui/Loader";
import {useUserStore} from "entites/User";
import {isNull, isString} from "lodash";
import Router, {useRouter} from "next/router";
import {NavigationBar} from "ui/NavigationBar";
import {ContentWrapper} from "ui/ContentWrapper";
import {PageWrapper} from "ui/PageWrapper";

export const ServerGuard = ({ children }: { children: JSX.Element }) => {
	const [getUser, user, error] = useUserStore(store => [store.getUser, store.user, store.error]);
	const {route} = useRouter();
	const isOpenPath = ["/error", "/logger"].includes(route);
	useEffect(() => {
		if (!isString(error) && error?.status === 403 && !isOpenPath) {
			window.location.replace("/api/login");
		}
	}, [error, isOpenPath, route, user]);

	useMountEffect(() => {
		if (!isOpenPath) {
			getUser();
		}
	});

	const [serverLoading, setServerLoading] = useState(false);

	useMountEffect(() => {
		if (!isOpenPath) {
			const start = () => {
				setServerLoading(true);
			};
			const end = () => {
				setServerLoading(false);
			};
			Router.events.on("routeChangeStart", start);
			Router.events.on("routeChangeComplete", end);
			Router.events.on("routeChangeError", end);
			return () => {
				Router.events.off("routeChangeStart", start);
				Router.events.off("routeChangeComplete", end);
				Router.events.off("routeChangeError", end);
			};
		}
	});

	if (serverLoading || (isNull(user) && !isOpenPath)) {
		return(
			<PageWrapper>
				<NavigationBar />
				<ContentWrapper>
					<Loader/>
				</ContentWrapper>
			</PageWrapper>
		);
	}

	if (!isNull(error)) {
		return <WorkerPage/>;
	}

	if (!isNull(user) || isOpenPath) {
		return children;
	}

	return <Loader/>;
};
