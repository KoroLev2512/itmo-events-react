import React, {useMemo} from "react";
import HomeIcon from "../../lib/icons/HomeIcon";
import TicketIcon from "../../lib/icons/TicketIcon";
import FormIcon from "../../lib/icons/FormIcon";
import WarningIcon from "../../lib/icons/WarningIcon";
import Logotype from "../Logotype/Logotype";
import Burger from "../Burger/Burger";
import {Menu} from "ui/Menu";
import {MenuItem} from "ui/MenuItem";
import { MenuItemProps } from "../MenuItem/types";
import styles from "./styles.module.scss";
import {useAppStore} from "lib/store/appStore";
import classNames from "classnames";
import {UserPic} from "../UserPic";
import {useRouter} from "next/router";
import {useIfUserRole} from "entites/User";
import {compact} from "lodash";


const NavigationBarToggle = (): JSX.Element => {
	const [toggleMenuPage, menuPageIsOpen, toggleProfilePage, profilePageIsClose] = useAppStore(state => [state.toggleMenuPage, state.menuPageIsOpen, state.toggleProfilePage, state.profilePageIsClose]);
	return (
		<div
			onClick={() => {
				toggleMenuPage();
				if (profilePageIsClose && window.innerWidth <= 720) {
					toggleProfilePage();
				}
			}}
		>
			<Burger
				menuPageIsOpen={menuPageIsOpen}
			/>
		</div>
	);
};
export const NavigationBar = (): JSX.Element => {
	const [menuPageIsOpen, toggleMenuPage, toggleProfilePage] = useAppStore(state => [state.menuPageIsOpen, state.toggleMenuPage, state.toggleProfilePage]);
	const {route} = useRouter();
	const ifUser = useIfUserRole();
	const MenuItems: MenuItemProps[] = useMemo(() => compact([
		{ icon: <HomeIcon />, name: "Главная", href: "/" },
		{ icon: <TicketIcon />, name: "Мои мероприятия", href: "/events" },
		(ifUser.isAdmin || ifUser.isEventAdmin) && { icon: <FormIcon />, name: "Мои формы", href: "/forms" },
		{ icon: <WarningIcon />, name: "Правила", href: "/rules" },
	]), [ifUser.isAdmin, ifUser.isEventAdmin]);

	return (
		<div className={classNames(styles.container, {[styles.closedBar]: menuPageIsOpen})}>
			<div className={styles.header}>
				<NavigationBarToggle />
				<div className={classNames(styles.toggle, {[styles.toggleBeforeOpen]: menuPageIsOpen}, [styles.logoContainer])}>
					<Logotype />
				</div>
				<div className={styles.userPic} onClick={() => {
					toggleProfilePage();
					if (menuPageIsOpen) {
						toggleMenuPage();
					}
				}}>
					<UserPic url="/thumbnail/user.jpg" height={40} width={40} />
				</div>

			</div>
			<div className={classNames(styles, {[styles.navigationWrapper]: menuPageIsOpen})} onClick={() => {toggleMenuPage(false);}}>
				<div className={classNames(styles.navigation, {[styles.openNav]: menuPageIsOpen})} onClick={(e) => {e.stopPropagation();}}>
					<Menu>
						{MenuItems.map((item, index) => (
							<MenuItem {...item} key={index} active={route} />
						))}
					</Menu>
				</div>
			</div>
		</div>
	);
};
