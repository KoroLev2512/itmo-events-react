import React from "react";
import { Text } from "../Text";
import { NewsItem } from "./RulesItem";
import styles from "./styles.module.scss";

export const NewsList = () => {
	return (
		<div className={styles.card}>
			<Text as="h2" className={styles.title}>
                Новости
			</Text>
			<div className={styles.list}>
				<NewsItem />
				<NewsItem />
				<NewsItem />
			</div>
		</div>
	);
};