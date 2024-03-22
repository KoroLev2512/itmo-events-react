import Head from "next/head";
import React, {useEffect} from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import {NavigationBar} from "ui/NavigationBar";
import {useMountEffect} from "hooks/useMountEffect";
import {useAppStore} from "lib/store/appStore";
import {parseCookies} from "nookies";
import { Layout } from "./types";
import {ProfileBar} from "../ProfileBar";
import {PageWrapper} from "ui/PageWrapper";

const AppWrapper = (props: Layout) => {
	const {children} = props;
	const [isDarkMode, toggleDarkMode, toggleProfilePage] = useAppStore(state => [state.isDarkMode, state.toggleDarkMode, state.toggleProfilePage, state.profilePageIsClose]);
	const defaultTheme = parseCookies().theme || "light";

	useEffect(() => {
		if (window.innerWidth <= 720) {
			toggleProfilePage(false);
		}
	}, [toggleProfilePage]);

	useMountEffect(() => {
		if (defaultTheme) {
			toggleDarkMode(defaultTheme === "dark");
		} else {
			toggleDarkMode(false);
		}
	});

	useEffect(() => {
		if (isDarkMode === true) {
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
			document.documentElement.removeAttribute("data-theme");
		}
	}, [isDarkMode]);

	return (
		<PageWrapper>
			<Head>
				<title>ITMO.Events личный кабинет</title>
			</Head>
			<NavigationBar />
			<ContentWrapper>{children}</ContentWrapper>
			<ProfileBar />
		</PageWrapper>
	);
};

export default AppWrapper;
