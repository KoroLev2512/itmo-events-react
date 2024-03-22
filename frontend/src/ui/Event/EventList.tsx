import React, {useCallback, useState} from "react";
import { EventCard } from "./EventCard";
import { Section } from "../Section";
import { Text } from "../Text";
import ArrowIcon from "../../lib/icons/ArrowIcon";
import styles from "./styles.module.scss";
import {Event} from "entites/Events";
import {useAppStore} from "../../lib/store/appStore";
import {isEmpty} from "lodash";

interface IProps {
	events: Event[];
}

export const EventList = (props: IProps) => {
	const { events } = props;
	const isDarkMode = useAppStore(state => state.isDarkMode);
	const [active, setActive] = useState(0);
	const slides = useCallback(
		(data: Event[]): JSX.Element[] =>
			data.map((item) => (
				<EventCard
					style={{transform: `translateX(-${active * 240}px)`, transition: "all 1s"}}
					key={item.id}
					event={item}
				/>
			)),
		[active]
	);

	return (
		<div>
			<Text as="h2">Мероприятия</Text>
			<div className={styles.slider}>
				{!isEmpty(events) && (
					<span className={styles.arrowPrev} onClick={() => setActive((item) => item === 0 ? slides.length - 1 : item - 1)}>
						<ArrowIcon rotation={-90} color={isDarkMode ? "#c0c0c0" : "#000"}/>
					</span>
				)}
				{!isEmpty(events)
					? (
						<Section margin={10} className={styles.list}>
							{slides(events)}
						</Section>
					)
					: <Text>Мероприятия отсутствуют</Text>
				}
				{!isEmpty(events) && (
					<span className={styles.arrowNext} onClick={() => setActive((item) => item === slides.length - 1 ? 0 : item + 1)}>
						<ArrowIcon rotation={90} color={isDarkMode ? "#c0c0c0" : "#000"}/>
					</span>
				)}
			</div>
		</div>
	);
};
