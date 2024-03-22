import LogoutIcon from "lib/icons/LogoutIcon";
import PencilIcon from "lib/icons/PencilIcon";
import React from "react";
import { SecondaryButton } from "../Button";
import { Section } from "../Section";
import { Text } from "../Text";
import { UserPic } from "../UserPic";
import styles from "./styles.module.scss";
import Router from "next/router";
import {useUserStore} from "entites/User";

export const Header = () => {
	const user = useUserStore(state => state.user);
	return (
		<div className={styles.header}>
			<Section className={styles.headerWrapper}>
				<UserPic className={styles.userPic} url={user?.picture || "/thumbnail/user.jpg"} height={54} width={54} />
				<div className={styles.userInfo}>
					<Text as="h3">
						{user?.name || "Default student"}
					</Text>
					<Text>{user?.isu || "000000"}</Text>
				</div>
			</Section>
			<div className={styles.actions}>
				<SecondaryButton onClick={() => Router.push("/profile/edit")}>
					<PencilIcon /> Изменить
				</SecondaryButton>
				<SecondaryButton onClick={() => Router.push("/api/login/out")}>
					<LogoutIcon /> Выйти
				</SecondaryButton>
			</div>
		</div>
	);
};
