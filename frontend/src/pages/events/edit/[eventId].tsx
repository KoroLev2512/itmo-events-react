import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {EventForm} from "pages-flat/events/EventForm";
import {useEventsStore} from "entites/Events";
import {isNull, isString} from "lodash";
import { Text } from "ui/Text";
import {useIfUserRole, useUserStore} from "entites/User";
import {useMountEffect} from "hooks/useMountEffect";

const EditEventPage = () => {
	const [
		editEvent,
		getEvent,
		event,
		resetEvent,
	] = useEventsStore(state => [
		state.editEvent,
		state.getEvent,
		state.event,
		state.resetEvent,
	]);
	const user = useUserStore(state => state.user);


	const router = useRouter();
	const {eventId} = router.query;

	const ifUser = useIfUserRole();

	useMountEffect(() => {
		if (!ifUser.isAdmin && !ifUser.isEventAdmin) {
			router.push("/");
		}
	});

	useEffect(() => {
		if (isString(eventId)) {
			getEvent(eventId);
		}
		return resetEvent();
	}, [eventId, getEvent, resetEvent]);

	useEffect(() => {
		if (ifUser.isEventAdmin && event && event.userId !== user.isu) {
			router.push("/");
		}
		if (!isNull(event)) {
			if (event.duration) {
				event.durationDays = Math.floor(event.duration / 24);
				event.durationHours = event.duration - Math.floor(event.duration / 24) * 24;
			}
		}
	}, [event, ifUser.isEventAdmin, router, user.isu]);

	if (!ifUser.isAdmin && !ifUser.isEventAdmin) {
		return null;
	}

	if (!eventId || isNull(event)) {
		return <Text>Событие не найдено</Text>;
	}

	return (
		<EventForm action={editEvent} initialValues={event}/>
	);
};

export default EditEventPage;
