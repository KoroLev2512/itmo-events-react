import React from "react";
import { Text } from "../Text";
import { NewsItem } from "./NewsItem";
import styles from "./styles.module.scss";
import {News} from "../../lib/types/dto/news.dto";
import {isEmpty, isNull} from "lodash";

interface IProps {
	news: null | [] | News[]
}
export const NewsList = (props: IProps) => {
	const { news } = props;

	return (
		<div className={styles.card}>
			<Text as="h2" className={styles.title}>
        Новости
			</Text>
			{!isEmpty(news) && !isNull(news)
				? (
					<div className={styles.list}>
						{news.slice(0, 5).map((item) => (
							<NewsItem key={item.news_id} news={item}/>
						))}
					</div>
				)
				: <Text>Это уже не новости, это старости</Text>}
		</div>
	);
};
