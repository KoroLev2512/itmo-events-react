import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../Button";
import { Section } from "../Section";
import { Text } from "../Text";
import styles from "./styles.module.scss";
import Link from "next/link";

export const TgChannel = () => {
	return (
		<div className={styles.card}>
			<Text as="h2" className={styles.title}>
				Telegram
			</Text>
			<div className={styles.content}>
				<div className={styles.pic}>
					<Image
						src={"/icons/tg.png"}
						height={72}
						width={72}
						alt="Telegram"
					/>
				</div>
				<Section margin={15}>
					<Text as="h3">Больше мероприятий</Text>
					<Text as="p" className={styles.descr}>
            Не нашли мероприятие на нашем сервисе? Воспользуйтесь телеграм-каналом, в котором собраны все события ИТМО
					</Text>
				</Section>
				<div className={styles.action}>
					<Link href="https://t.me/ITMO_events_bot">
						<PrimaryButton>Перейти</PrimaryButton>
					</Link>
				</div>
			</div>
		</div>
	);
};
