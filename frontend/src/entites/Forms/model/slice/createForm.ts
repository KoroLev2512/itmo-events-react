import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import axios from "lib/api/axios";
import {IFormState} from "../../types/formState";
import {CreateFormApiPaths} from "../../consts/apiPaths";
import Router from "next/router";

export const useFormStore = create<IFormState>()(devtools(immer((set) => {
	return ({
		isLoading: false,
		error: undefined,
		form: undefined,
		forms: [],
		createForm: async (formInfo) => {
			try {
				set({isLoading: true, error: undefined});
				const {data} = await axios.post(CreateFormApiPaths.CREATE, formInfo);
				set({isLoading: false});
				if (data) {
					await Router.push(`/forms/${data}`);
				} else {
					set({error: "Server error"});
				}
			} catch (error) {
				console.error(error);
				set({isLoading: false, error});
			}
		},
		loadForm: async (id) => {
			try {
				set({isLoading: true, error: undefined});
				const { data } = await axios.get(`${CreateFormApiPaths.LOAD}/${id}`);
				set({isLoading: false , form: data});
			} catch (error) {
				console.error(error);
				set({isLoading: false, error});
			}
		},
		fetchForms: async () => {
			try {
				set({isLoading: true, error: undefined});
				const { data } = await axios.get(`${CreateFormApiPaths.LOAD}`);
				set({isLoading: false , forms: data});
			} catch (error) {
				console.log(error);
				set({isLoading: false, error});
			}
		},
		editForm: async (data, id) => {
			try {
				set({isLoading: true, error: undefined});
				await axios.patch(`${CreateFormApiPaths.EDIT}/${id}`, data);
				set({isLoading: false});
			} catch (error) {
				console.error(error);
				set({isLoading: false, error});
			}
		},
		resetForm: () => {
			set({
				isLoading: false,
				error: undefined,
				form: undefined,
			});
		}
	});
})));
