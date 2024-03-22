import React from "react";
import ArrowIcon from "../../lib/icons/ArrowIcon";
import { Text } from "../Text";
import styles from "./styles.module.scss";
import {News} from "../../lib/types/dto/news.dto";
interface IProps {
	news: News;
}
export const NewsItem = (props: IProps) => {
	const {news} = props;

	return (
		<div className={styles.newsItem}>
			<div className={styles.newsItemContent}>
				<Text as="h4" className={styles.newsTopic}>
					{news?.header}
				</Text>
				<Text className={styles.newsText} as="p">
					{news?.data}
				</Text>
				<Text className={styles.newsDate}>{news?.time}</Text>
			</div>

			<ArrowIcon rotation={90} />
		</div>
	);
};
