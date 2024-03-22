import {memo, MemoExoticComponent} from "react";
import {FormikCheckbox, FormikInput, FormikRadio} from "feature/Form";
import {FormikFieldsPropsTypes} from "feature/Form/model/types/formikTypes";
import {FormikTextarea} from "feature/Form/ui/Textarea/FormikTextarea";
import {FieldTypes} from "entites/Forms";

interface IGetFormItemComponent {
	field: {
		title: string;
		isHidden: boolean;
		fieldId: number;
		answers?: string[] | string;
		fieldType?: FieldTypes;
		required?: boolean;
	}
}

export const GetFormItemComponent = (props: IGetFormItemComponent) => {
	const {field} = props;
	const {fieldType, title, fieldId, answers} = field;
	if (!fieldType) {
		return null;
	}
	let Component: MemoExoticComponent<(props: FormikFieldsPropsTypes) => JSX.Element | null>;
	switch (fieldType) {
	case FieldTypes.TEXT:
		Component = FormikInput;
		break;
	case FieldTypes.CHECKBOX:
		Component = FormikCheckbox;
		break;
	case FieldTypes.RADIO:
		Component = FormikRadio;
		break;
	case FieldTypes.TEXTAREA:
		Component = FormikTextarea;
		break;
	}

	return <Component name={String(fieldId)} label={title} answers={answers}/>;
};

export const GetFormItem = memo(GetFormItemComponent);
