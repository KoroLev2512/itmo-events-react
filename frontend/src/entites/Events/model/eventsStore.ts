import axios from "../../../lib/api/axios";
import {ADD_EVENT, DELETE_EVENT, EDIT_EVENT, FETCH_EVENTS, GET_EVENT} from "../consts/apiPaths";
import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import Router from "next/router";
import {EventsStore, Event} from "../types/eventsStore";

export const useEventsStore = create<EventsStore>()(devtools(immer((set) => ({
	events: null,
	event: null,
	isLoading: false,
	error: null,
	fetchEvents: async () => {
		try {
			set({ isLoading: true });
			const response = await axios.get(FETCH_EVENTS); // Replace with your backend API endpoint
			const {data} = await response;
			set({events: data, isLoading: false});
		} catch (error) {
			set({ error: error as string });
		}
	},
	getEvent: async (id) => {
		try {
			set({ isLoading: true });
			const {data} = await axios.get(GET_EVENT(id));
			set({event: data, isLoading: false});
		} catch (error) {
			set({ error: error as string });
		}
	},
	createEvent: async (eventData: Event) => {
		try {
			set({isLoading: true});
			const {data} = await axios.post<Event, { data: {id: number}}>(ADD_EVENT, eventData);
			set({isLoading: false});
			if (data.id) {
				await Router.push(`/events/${data.id}`);
			}
		} catch (error) {
			set({error: error as string, isLoading: false});
		}
	},
	editEvent: async (data) => {
		try {
			set({isLoading: true});
			if (data.id) {
				const response = await axios.patch(EDIT_EVENT(data.id), data);
				set({isLoading: false});
				if (response) {
					await Router.push(`/events/${data.id}`);
				}
			}
		} catch (error) {
			set({error: error as string, isLoading: false});
		}
	},
	deleteEvent: async (id) => {
		try {
			set({isLoading: true});
			const {data} = await axios.delete(DELETE_EVENT(id));
			if (data) {
				set({isLoading: false});
				if (data) {
					await Router.push("/events");
				}
			}
		} catch (error) {
			set({error: error as string, isLoading: false});
		}
	},
	resetEvent: () => {
		set({
			events: null,
			event: null,
			isLoading: false,
			error: null,
		});
	}
}))));
