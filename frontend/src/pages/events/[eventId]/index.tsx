import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {useEventsStore} from "entites/Events";
import {EventPage} from "pages-flat/events/EventPage";
import {useUserStore} from "../../../entites/User";

const Event = () => {
	const router = useRouter();
	const {eventId} = router.query;
	const [getEvent, event, resetEvent, deleteEvent] = useEventsStore(state => [state.getEvent, state.event, state.resetEvent, state.deleteEvent]);
	const user = useUserStore(state => state.user);
	useEffect(() => {
		if (eventId) {
			getEvent(eventId as string);
		}
		return resetEvent();
	}, [eventId, getEvent, resetEvent]);

	return <EventPage event={event} deleteEvent={deleteEvent} user={user}/>;
};

export default Event;
