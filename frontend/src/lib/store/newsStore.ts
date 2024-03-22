import axios from "../api/axios";
import {NewsStore} from "../types/dto/news.dto";
import {FETCH_NEWS} from "../api/requests/news.requests";
import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

export const useNewsStore = create<NewsStore>()(devtools(immer((set) => ({
	news: null,
	isLoading: false,
	getNews: async () => {
		try {
			const response = await axios.get(FETCH_NEWS);
			const {data} = await response;
			set({news: data});
		} catch (error) {
			set({news: null});
		}
	},
}))));
