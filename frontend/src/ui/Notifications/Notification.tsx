import React from "react";
import { Section } from "../Section";
import { Text } from "../Text";
import styles from "./styles.module.scss";
import {NotificationStatuses} from "../../domain/notification/notification.types";

type Props = {
  status: NotificationStatuses;
};

export const Notification = ({ status }: Props) => {
	return (
		<Section margin={12}>
			<Section margin={8}>
				<Text as={"h5"} className={styles[status]}>
          Ваша заявка была принята!
				</Text>
			</Section>
			<Section margin={8}>
				<Text>
          Не забудьте подтвердить своё участие в личном кабинете в течение 24
          часов.
				</Text>
			</Section>
			<Text as={"span"} className={styles.date}>
        18.12.2022 15:43
			</Text>
		</Section>
	);
};
