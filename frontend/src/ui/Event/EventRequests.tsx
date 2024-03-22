import React from "react";
import {Text} from "../Text";
import {RequestsItem} from "./RequestsItem";
import styles from "./styles.module.scss";
import {useIfUserRole} from "entites/User";
import {PrimaryButton} from "ui/Button";
import Link from "next/link";

const testData = [
	{
		id: 123,
		img: {
			name: "test",
			src: "/events/thumbnails/selo.jpg",
			alt: "test"
		},
		name: "Экскурсия по Царскому селу",
		date: 1681821271619,
		time: 10800000,
		status: "new"
	},
	{
		id: 122,
		img: {
			name: "test",
			src: "/events/thumbnails/selo.jpg",
			alt: "test"
		},
		name: "Экскурсия по Царскому селу",
		date: 1681821271619,
		time: 10800000,
		status: "accepted"
	},
	{
		id: 121,
		img: {
			name: "test",
			src: "/events/thumbnails/selo.jpg",
			alt: "test"
		},
		name: "Экскурсия по Царскому селу",
		date: 1681821271619,
		time: 10800000,
		status: "canceled"
	}
];

const EventRequests = () => {
	const ifUser = useIfUserRole();

	return (
		<div className={styles.requestsWrapper}>
			<div className={styles.requestsCard}>
				<div className={styles.requestsItemHeader}>
					<Text as="h2" className={styles.requestsItemTitle}>
                    Ваши заявки
					</Text>
				</div>
				<div className={styles.requestsList}>
					{testData.map((item) => (
						<RequestsItem key={`${item.name}+${item.date}`} data={item}/>
					))}
				</div>
			</div>
			{(ifUser.isEventAdmin || ifUser.isAdmin) && (
				<div className={styles.requestsCard}>
					<div className={styles.requestsItemHeader}>
						<Text as="h2" className={styles.requestsItemTitle}>
						Ваши мероприятия
						</Text>
						<Link href='/events/create'>
							<PrimaryButton className={styles.createButton}>Создать</PrimaryButton>
						</Link>

					</div>
					<div className={styles.requestsList}>
						{testData.map((item) => (
							<RequestsItem key={item.id} data={item}/>
						))}
					</div>

				</div>
			)}
		</div>
	);
};

export default EventRequests;
