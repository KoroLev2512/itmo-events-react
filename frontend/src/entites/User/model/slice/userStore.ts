import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import axios from "lib/api/axios";
import {UserStore} from "../../types/userState";
import {UserApiPaths} from "../../consts/apiPaths";


export const useUserStore = create<UserStore>()(devtools(immer((set, getStore) => ({
	user: null,
	isLoading: false,
	error: null,
	getUser: async () => {
		try {
			set({isLoading: true});
			const {data} = await axios.get(UserApiPaths.GET_ME);
			set({user: data,  isLoading: false});
		} catch (error) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			set({ isLoading: false, user: null, error: error?.response });
		}
	},
	editUser: async (postData) => {
		try {
			set({isLoading: true});
			await axios.put(UserApiPaths.UPDATE_USER, postData);
			set({ user: null, isLoading: false});
			getStore().getUser();
		} catch (error) {
			set({ isLoading: false, user: null, error: error as string });
		}
	}
}))));
