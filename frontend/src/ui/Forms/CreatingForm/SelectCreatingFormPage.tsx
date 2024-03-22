import React, {FC} from "react";
import {useField, useFormikContext} from "formik";
import FormCustomSelect from "../../../feature/Form/ui/customSelect/FormCustomSelect";
import {FieldTypes} from "../../../entites/Forms";

interface IProps {
	name: string;
	options: Record<string, string>;
	fieldId: number;
}

const getInitialAnswersValue = (answersType: FieldTypes) => {
	switch (answersType) {
	case FieldTypes.TEXT:
	case FieldTypes.TEXTAREA:
		return "";
	case FieldTypes.RADIO:
	case FieldTypes.CHECKBOX:
		return [""];
	default:
		break;
	}
};

const SelectCreatingFormPage: FC<IProps> = ({options, name, fieldId}) => {
	const Formik = useFormikContext();
	const {setFieldValue} = Formik;
	const [_, meta, helpers] = useField(name);
	const {value} = meta;
	const {setValue} = helpers;
	const prepareOnChange = (value: FieldTypes) => {
		setFieldValue(`fields[${fieldId}].answers`, getInitialAnswersValue(value));
		setValue(value);
	};

	return (
		<FormCustomSelect
			options={options} name={name}
			value={value}
			prepareOnChange={prepareOnChange}
		/>
	);
}
;
export default SelectCreatingFormPage;
