import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import axios from "lib/api/axios";
import {IFillFormState} from "../../types/fillFormState";
import {FillFormApiPaths} from "../../consts/apiPaths";

import Router from "next/router";
export const useFillFormStore = create<IFillFormState>()(devtools(immer((set) => {
	return ({
		isLoading: false,
		error: undefined,
		form: null,
		registration: async (regData) => {
			try {
				set({isLoading: true});
				const response = await axios.post(`${FillFormApiPaths.REGISTER_USER}/${regData.eventId}`)
				if (response) {
					set({isLoading: false, form: null});
					await Router.push(`/events/${regData.eventId}`);
				}
			} catch (error) {
				console.log(error);
				set({isLoading: false, error});
			}
		},
		loadForm: async (id) => {
			try {
				set({isLoading: true});
				const { data } = await axios.get(`${FillFormApiPaths.GET_FORM}/${id}`);
				set({isLoading: false, form: data});
			} catch (error) {
				console.log(error);
				set({isLoading: false, error});
			}
		},
		loadEventForm: async (id: string) => {
			try {
				set({isLoading: true});
				const { data } = await axios.get(`${FillFormApiPaths.GET_EVENT_FORM}${id}`);
				set({isLoading: false, form: data});
			} catch (error) {
				console.log(error);
				set({isLoading: false, error});
			}
		},
		resetForm: () => set({form: null, error: undefined, isLoading: false})
	});
})));
