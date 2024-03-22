import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import {ImageStore} from "../types/imageStoreTypes";
import axios from "lib/api/axios";

export const useImageStore = create<ImageStore>()(devtools(immer((set, getState) => ({
	image: undefined,
	imageFile: undefined,
	error: undefined,
	isLoading: false,
	uploadImage:  async (image) => {
		try {
			set({isLoading: true, error: undefined});
			const {data} = await axios.post<{name: string; realName: string}>("/upload", {image});
			set({image: data, isLoading: false});
			const getImage = getState().getImage;
			getImage(data.name);
		} catch (error) {
			set({image: undefined, error, isLoading: false});
		}
	},
	getImage:  async (name) => {
		try {
			set({isLoading: true, error: undefined, image: undefined, imageFile: undefined});
			const {data} = await axios.get(`/image/${name}`);
			set({image: data, isLoading: false});
		} catch (error) {
			set({image: undefined, error, isLoading: false});
		}
	},
}))));
