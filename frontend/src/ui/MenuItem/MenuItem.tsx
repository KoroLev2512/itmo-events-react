import React, {memo} from "react";
import { MenuItemProps } from "./types";
import styles from "./styles.module.scss";
import Link from "next/link";
import classNames from "classnames";
import {useAppStore} from "lib/store/appStore";

const MenuItemComponent = ({ icon, name, href = "#", active }: MenuItemProps & { active: string }) => {
	const [menuPageIsOpen, toggleMenuPage] = useAppStore(state => [state.menuPageIsOpen, state.toggleMenuPage]);
	return (
		<div
			className={classNames(styles.menuItem, {[styles.openNav]: menuPageIsOpen, [styles.active]: href === active})}
			onClick={() => {
				if (window.innerWidth <= 720) {
					toggleMenuPage(false);
				}}}
		>
			<Link
				href={href}>
				{icon}
				<span className={classNames(styles.menuItemText, {[styles.toggleBeforeOpen]: menuPageIsOpen})}>
					{name}
				</span>
			</Link>
		</div>

	);
};

export const MenuItem = memo(MenuItemComponent);

