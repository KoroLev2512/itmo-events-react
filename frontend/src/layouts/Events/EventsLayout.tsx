import React from "react";
import { Section } from "ui/Section";
import EventRequests from "ui/Event/EventRequests";
import PastEvents from "ui/Event/PastEvents";

export const EventsLayout = () => {
	return (
		<>
			<Section margin={16}>
				<EventRequests/>
			</Section>
			{/*<Section margin={16}>*/}
			{/*	<PastEvents/>*/}
			{/*</Section>*/}
		</>
	);
};
