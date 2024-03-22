export enum ROLES {
	ADMIN = "ADMIN",
	USER = "USER",
	EVENTADMIN = "EVENTADMIN",
	EVENTMANAGER = "EVENTMANAGER",
}

export type User = {
	isu: number;
	gender: string;
	name: string;
	given_name: string;
	middle_name: string;
	family_name: string;
	phone: string;
	vk: string;
	tg: string;
	email: string;
	email_verified: boolean;
	is_student: boolean;
	corp_email: string;
	picture: string;
	banned: boolean;
	ban_reason: string;
	roles: {
		id: number;
		value: ROLES;
		description: string;
	}[];
	birth_date: number;
}

export type UserStore = {
	user: User | null;
	getUser: () => void
	isLoading: boolean;
	error: null | string | Record<string, unknown>;
	editUser: (data: User) => void;
}

