export enum FieldTypes {
	TEXT = "text",
	TEXTAREA = "textarea",
	RADIO = "radio",
	CHECKBOX = "checkbox",
}

export interface IForm {
	title: string;
	description: string;
	fields: {
		title: string;
		isHidden: boolean;
		fieldId: number;
		answers?: string[] | string;
		fieldType?: FieldTypes;
		required?: boolean;
	}[]
}

export interface IFillFormState {
	error?: unknown;
	isLoading: boolean;
	form: IForm | null;
	registration: (regData: {
		eventId: number | string;
		reg: string[]
	}) => void;
	loadForm: (id: string) => void;
	loadEventForm: (id: string) => void;
	resetForm: () => void
}
