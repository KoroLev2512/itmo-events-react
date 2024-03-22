import React from "react";
import {Text} from "../Text";
import styles from "./styles.module.scss";
import PastEventItem from "./PastEventItem";

const PastEvents = () => {
	return (
		<div className={styles.pastEventsSection}>
			<Text as="h2">
                Прошедшие мероприятия
			</Text>
			<div className={styles.pastEventsList}>
				<PastEventItem/>
				<PastEventItem/>
				<PastEventItem/>
				<PastEventItem/>
			</div>
		</div>
	);
};

export default PastEvents;
