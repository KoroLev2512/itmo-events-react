import React from "react";
import CustomCheckbox from "./CustomCheckbox";
import {useField} from "formik";

interface IProps {
	name: string;
	label: string;
}
const CustomCheckboxForm: React.FC<IProps> = ({name, label}) => {
	const [_, meta, helpers] = useField(name);
	const { value } = meta;
	const { setValue } = helpers;
	const onChange = (e: boolean | undefined) => {
		setValue(e);
	};

	return (
		<CustomCheckbox  value={value} onChange={onChange} label={label} />

	);
};

export default CustomCheckboxForm;