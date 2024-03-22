import React from "react";
import { EventList } from "ui/Event";
import { TgChannel } from "ui/TgChannel";
import { Section } from "ui/Section";
import { Text } from "ui/Text";
import { FeedbackWidget } from "ui/Feedback";
import styles from "./home.styles.module.scss";
import ColorMode from "ui/Button/DarkThemeButton";
import {Event} from "entites/Events";
import {News} from "lib/types/dto/news.dto";
import {User} from "entites/User/types/userState";

interface IProps {
	children?: React.ReactNode;
	user: User | null;
	events: Event[] | [];
	news: null | [] | News[];
}
export const HomeLayout = ({ children, user, events}: IProps) => {
	return (
		<>
			{children}
			<Section margin={16}>
				<Section margin={10}>
					<div className={styles.headingWrapper}>
						<Text as="h1">Привет, {user?.given_name}! 👋</Text>
						<ColorMode/>
					</div>
				</Section>
				<Text as="p" className={styles.description}>
          Добро пожаловать на сервис ITMO.EVENTS, разработанный для студентов
					<br /> и сотрудников Университета ИТМО.
				</Text>
			</Section>
			<EventList events={events} />
			<Section className={styles.infoContent}>
				{/*<NewsList news={news} />*/}
				<TgChannel/>
				<FeedbackWidget />
			</Section>
		</>
	);
};

