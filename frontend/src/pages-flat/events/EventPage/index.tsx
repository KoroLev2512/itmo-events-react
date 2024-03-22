import React from "react";
import {isNull} from "lodash";
import {Section} from "ui/Section";
import {Event} from "entites/Events";
import style from "./styles.module.scss";
import {PrimaryButton} from "ui/Button";
import Link from "next/link";
import {useIfUserRole, User} from "entites/User";
interface IProps {
	event: Event;
	deleteEvent: (id: string) => void;
	user: User;
}

export const EventPage = (props: IProps) => {
	const { event, deleteEvent, user} = props;
	const ifUser = useIfUserRole();


	if (isNull(event)) {
		return (
			<Section margin={16}>
				<div className={style.emptyPage}>К сожалению такого мероприятия не существует.</div>
			</Section>
		);
	}
	return (
		<Section margin={16}>
			<div className={style.card}>
				{((ifUser.isEventAdmin && event.userId === user.isu) || ifUser.isAdmin) && (
					<Section margin={16}>
						<Link href={`/events/edit/${event.id}`}>
							<PrimaryButton>
								Редактировать
							</PrimaryButton>
						</Link>
						<PrimaryButton
							onClick={() => {
								deleteEvent(event.id);
							}}
						>
							Удалить
						</PrimaryButton>
					</Section>
				)}
				<Section margin={16}>
					Название <u>{event.title}</u>
				</Section>
				<Section margin={16}>
					Описание <u>{event.description}</u>
				</Section>
			</div>
		</Section>
	);
};
