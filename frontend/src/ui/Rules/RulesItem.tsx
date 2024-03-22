import React from "react";
import ArrowIcon from "../../lib/icons/ArrowIcon";
import { Text } from "../Text";
import styles from "./styles.module.scss";

export const NewsItem = () => {
	return (
		<div className={styles.newsItem}>
			<div className={styles.newsItemContent}>
				<Text as="h4" className={styles.newsTopic}>
                    Фотоотчёт с поездки в Москву
				</Text>
				<Text className={styles.newsText} as="p">
                    Lorem ipsum dolor sit amet, ctetur adipiscing elit, sed do eiusmod
                    tempor incididunt...
				</Text>
				<Text className={styles.newsDate}>18.12.2022</Text>
			</div>

			<ArrowIcon rotation={90} />
		</div>
	);
};