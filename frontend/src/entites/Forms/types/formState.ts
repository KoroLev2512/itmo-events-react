
export enum FieldTypes {
	TEXT = "text",
	TEXTAREA = "textarea",
	RADIO = "radio",
	CHECKBOX = "checkbox",
}

export interface IForm {
	id: number
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

export interface IFormState {
	error?: unknown;
	isLoading: boolean;
	createForm: (data: IForm) => void;
	loadForm: (id: string) => void;
	fetchForms: () => void;
	form?: IForm;
	forms?: IForm[];
	editForm: (data: IForm, id: string) => void;
	resetForm: () => void;
}
