import React from "react";
import { DateTime, Duration } from "luxon";
import {Text} from "../Text";
import styles from "./styles.module.scss";
import Image from "next/image";
import CalendarIcon from "../../lib/icons/CalendarIcon";
import {SECONDARY_GRAY_COLOR} from "../const/colors";
import ClockIcon from "../../lib/icons/ClockIcon";
import StatusButton from "./StatusButton";

interface IProps {
	data: {
		img: {
			name: string;
			src: string;
			alt: string;
		};
		name: string;
		date: number;
		time: number;
		status: string;
	}
}

export const RequestsItem = (props: IProps) => {
	const { data } = props;
	const { img, name, date, time, status} = data;
	return (
		<div className={styles.requestsItem}>
			<Image src={img.src} width={84} height={84} alt={img.alt} className={styles.cardImage}/>
			<div className={styles.cardItemText}>
				<Text as="h4" className={styles.cardItemTitle}>
					{name}
				</Text>
				<div className={styles.cardItemExtraInfo}>
					<Text><CalendarIcon width={14} height={14} color={SECONDARY_GRAY_COLOR}/>{DateTime.fromMillis(date).toLocaleString(DateTime.DATE_SHORT)}</Text>
					<Text><ClockIcon width={14} height={14} color={SECONDARY_GRAY_COLOR}/>{Duration.fromMillis(time).toFormat("hh:mm")}</Text>
				</div>
			</div>
			<StatusButton status={status}/>
		</div>
	);
};
