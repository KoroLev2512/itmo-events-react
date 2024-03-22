export type Event = {
	id?: string;
	title: string;
	description: string;
	imageUrl: string;
	authorId: number;
	EventStartDate: number;
	EventExpirationDate: number;
	regStartDate: number;
	regExpirationDate: number;
	duration: number;
	durationDays?: number;
	durationHours?: number;
	memberAmount: number;
	visitors: number;
	formId: number;
	userId: number;
}

export type EventsStore = {
	events: Event[] | [] | null;
	event: Event | null;
	isLoading: boolean;
	error: null | string;
	fetchEvents: () => void;
	getEvent: (id: string) => void;
	createEvent: (data: Event) => void;
	editEvent: (data: Event) => void;
	resetEvent: () => void;
	deleteEvent: (id: string) => void;
}
