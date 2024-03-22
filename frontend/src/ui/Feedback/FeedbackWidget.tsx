import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../Button";
import { Section } from "../Section";
import { Text } from "../Text";
import styles from "./styles.module.scss";
import Link from "next/link";

export const FeedbackWidget = () => {
	return (
		<div className={styles.card}>
			<Text as="h2" className={styles.title}>
        Поддержка
			</Text>
			<div className={styles.content}>
				<div className={styles.pic}>
					<Image
						src={"/icons/help.png"}
						height={72}
						width={72}
						alt="Поддержка"
					/>
				</div>
				<Section margin={15}>
					<Text as="h3">Возник вопрос?</Text>
					<Text as="p" className={styles.descr}>
            В случае возникновения проблемы на сайте вы всегда можете написать
						в поддержку и мы как можно быстрее всё исправим
					</Text>
				</Section>
				<div className={styles.action}>
					<Link href="https://helpdesk.itmo.ru/servicedesk/customer/portal/2">
						<PrimaryButton>Написать</PrimaryButton>
					</Link>
				</div>
			</div>
		</div>
	);
};
