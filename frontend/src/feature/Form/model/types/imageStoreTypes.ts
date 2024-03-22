export type Image = {
	name: string;
	realName: string;
}

export type ImageStore = {
	imageFile?: File;
	image?: Image;
	error?: unknown;
	isLoading: boolean;
	getImage: (name: string) => void;
	uploadImage: (image: File) => void;
}
