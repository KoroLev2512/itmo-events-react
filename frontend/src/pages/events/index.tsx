import React from "react";
import {EventsLayout} from "layouts/Events/EventsLayout";
// import {GetServerSideProps} from "next";
// import axiosForServer from "lib/api/axiosForServer";
// import {FETCH_EVENTS} from "lib/api/requests/event.requests";
// import {FETCH_NEWS} from "lib/api/requests/news.requests";

// interface IProps {
//
// }

const EventPage = () => {
	return <EventsLayout/>;
};

// export const getServerSideProps: GetServerSideProps<IProps | {}> = async () => {
// 	try {
// 		const {data: events} = await axiosForServer(FETCH_EVENTS);
// 		return {
// 			props: {
// 				events,
// 			}
// 		};
// 	} catch (error) {
// 		return {props: {}};
// 	}
// };

export default EventPage;
