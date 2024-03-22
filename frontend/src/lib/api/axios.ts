import axios from "axios";

const instance = axios.create({
	baseURL:  process.env.NEXT_PUBLIC_PUBLIC_HOST,
	headers: {
		"Content-Type": "application/json"
	},
	withCredentials: true,
	maxRedirects: 5,
});

export default instance;
