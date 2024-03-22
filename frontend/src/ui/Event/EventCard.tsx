import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, {CSSProperties} from "react";
import CalendarIcon from "../../lib/icons/CalendarIcon";
import { Section } from "../Section";
import { Text } from "../Text";
import styles from "./styles.module.scss";
import {Event} from "entites/Events";

interface IProps {
	event: Event;
	style: CSSProperties;
	slim?: boolean;
}

export const EventCard = (props: IProps) => {
	const {
		event: {
			id,
			title,
			regStartDate,
		},
		slim= false,
		style ,
	} = props;
	const dateTimeStart = new Date(regStartDate);
	const date_start = dateTimeStart.toLocaleDateString("ru-RU", {day: "numeric", month: "numeric", year: "numeric"});
	return (
		<Link href={`/events/${id}`}>
			<div className={classNames(styles.card, slim && styles.slim)} style={style}>
				<Image
					src="/events/thumbnails/selo.jpg"
					alt="Изображение мероприятия"
					layout="fill"
				/>
				<div className={styles.shadowWrapper}></div>
				<Section className={styles.content}>
					<Text as="h5">{title}</Text>
					<Text className={styles.date}>
						<CalendarIcon/>
						{date_start}
					</Text>
				</Section>
			</div>
		</Link>
	);
};
