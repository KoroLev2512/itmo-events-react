import React, {ChangeEventHandler, useCallback} from "react";
import {SelectComponent} from "ui/Select/ui/Select";
import {useField} from "formik";

interface IProps {
    name: string;
    label: string;
    options: {value: string; label: string}[];
}

export const SelectForm = (props: IProps) => {
	const { options, label, name} = props;
	const [field, meta, helpers] = useField<string>(name);
	const {value} = field;
	const {touched} = meta;
	const {setValue, setTouched} = helpers;
	const onBlurHandler = useCallback(() => {
		if (!touched) {
			setTouched(true, true);
		}
	}, [touched, setTouched]);
	const onChangeHandler = useCallback<ChangeEventHandler<HTMLSelectElement>>(
		(event) => {
			const newValue = event.target.value;
			setValue(newValue, touched);
		},
		[setValue, touched]
	);

	return (
		<SelectComponent options={options} label={label} value={value} onChange={onChangeHandler} onBlur={onBlurHandler}/>
	);
};

