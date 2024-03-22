import React, {ChangeEvent, useCallback} from "react";
import {Input} from "ui/Input/Input";
import {ErrorMessage, useField} from "formik";

interface IProps {
    name: string;
    label: string;
}

export const InputForm = (props: IProps) => {
	const {name, label} = props;
	const [field, meta, helpers] = useField<string>(name);
	const { value } = field;
	const { touched } = meta;
	const { setValue, setTouched } = helpers;
	const onBlurHandler = useCallback(() => {
		if (!touched) {
			setTouched(true, true);
		}
	}, [touched, setTouched]);
	const onChangeHandler = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const newValue = event.currentTarget.value;

			setValue(newValue, touched);
		},
		[setValue, touched]
	);
	return (
		<>
			<Input onChange={onChangeHandler} onBlur={onBlurHandler} label={label}>
				{value}
			</Input>
			<ErrorMessage name={name}/>
		</>
	);
};
