import BellIcon from "../../lib/icons/BellIcon";
import { Header } from "./Header";
import { NotificationsList } from "../Notifications/NotificationsList";
import React from "react";
import { Text } from "../Text";
import classNames from "classnames";
import styles from "./styles.module.scss";
import ArrowIcon from "../../lib/icons/ArrowIcon";
import {useAppStore} from "../../lib/store/appStore";

export const ProfileBar = (): JSX.Element => {
	const [profilePageIsClose, toggleProfilePage] = useAppStore(state => [state.profilePageIsClose, state.toggleProfilePage]);

	return (
		<div
			className={
				classNames(
					styles.wrapper,
					{[styles.closedBar]: profilePageIsClose}
				)
			}
			onClick={() => {if (window.innerWidth <= 720) {toggleProfilePage();}}}
		>
			<ProfileBarToggle />
			<ProfileBarContent />
		</div>
	);
};

const ProfileBarToggle = () => {
	const [toggleProfilePage, profilePageIsClose] = useAppStore(state => [state.toggleProfilePage, state.profilePageIsClose]);
	return (
		<div
			className={classNames(
				styles.toggle
			)}
			onClick={() => {
				toggleProfilePage(!profilePageIsClose);
			}}
		>
			<ArrowIcon rotation={profilePageIsClose ? 270 : 90} />
		</div>
	);
};

const ProfileBarContent = (): JSX.Element => {
	const profilePageIsClose = useAppStore(state => state.profilePageIsClose);
	return (
		<div
			className={classNames(styles.bar, {[styles.openMobileProfile]: profilePageIsClose})}
			onClick={(e) => {e.stopPropagation();}}
		>
			<Header />
			<Text as={"h3"}>
				<BellIcon /> Уведомления
			</Text>
			<NotificationsList />
		</div>
	);
};
