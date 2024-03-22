import React, {memo} from "react";
import {cloneDeep} from "lodash";
import {useField} from "formik";
import CreateSelect from "./CreateSelect";

interface IProps {
	name: string;
	placeholder: string;
	answerType?: string;
	icon?: string;
}

const CreateSelectForm = ({name, ...restProps}: IProps) => {
	const [_, meta, helpers] = useField<string[]>(name);
	const {value} = meta;
	const {setValue} = helpers;

	const onAddAnswer = () => {
		setValue([...value, ""]);
	};
	const onDeleteAnswer = (answerIndex: number) => {
		setValue(value.filter((_, index) => answerIndex !== index));
	};
	const updateValue = (newValue: string, index: number) => {
		const preparedValues = cloneDeep(value);
		preparedValues[index] = newValue;
		setValue(preparedValues);
	};
	return (
		<CreateSelect
			name={name} value={value}
			onAddAnswer={onAddAnswer}
			onDeleteAnswer={onDeleteAnswer}
			updateValue={updateValue}
			{...restProps}
		/>
	);
};

export default memo(CreateSelectForm);
