import React from "react";
import {HomeLayout} from "layouts";
import {GetServerSideProps, NextPage} from "next";
import {useUserStore} from "entites/User";
import {Event} from "entites/Events";
import {News} from "lib/types/dto/news.dto";
import axiosForServer from "lib/api/axiosForServer";
import {FETCH_EVENTS} from "lib/api/requests/event.requests";
import {FETCH_NEWS} from "lib/api/requests/news.requests";

interface IProps {
	events: Event[];
	news: News[];
}

const MainPage: NextPage<IProps> = (props) => {
	const {events, news} = props;
	const [user] = useUserStore(state => [state.user]);

	return <HomeLayout user={user} news={news} events={events}/>;
};

export const getServerSideProps: GetServerSideProps<IProps | object> = async () => {
	try {
		const {data: events} = await axiosForServer(FETCH_EVENTS);
		const {data: news} = await axiosForServer(FETCH_NEWS);
		return {
			props: {
				events,
				news,
			}
		};
	} catch (error) {
		return {props: {}};
	}
};

export default MainPage;
