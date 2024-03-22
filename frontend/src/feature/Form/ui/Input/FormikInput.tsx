import {ErrorMessage, useField} from "formik";
import {memo, useCallback} from "react";
import {FormikFieldsPropsTypes} from "../../model/types/formikTypes";
import {Input, InputType} from "shared/ui/Input/Input";

type IFormikInputProps = FormikFieldsPropsTypes & {
	type?: InputType;
	placeholder?: string;
}

export const FormikInputComponent = (props: IFormikInputProps) => {
	const {name, label, type, placeholder} = props;
	const [field, meta, helpers] = useField<string>(name);
	const {value} = field;
	const {touched} = meta;
	const {setValue, setTouched} = helpers;

	const onBlurHandler = useCallback(() => {
		if (!touched) {
			setTouched(true, true);
		}
	}, [touched, setTouched]);

	const onChangeHandler = useCallback(
		(value: string) => {
			setValue(value, touched);
		},
		[setValue, touched]
	);

	return (
		<>
			<Input
				label={label}
				onChange={onChangeHandler}
				onBlur={onBlurHandler}
				value={value}
				type={type}
				placeholder={placeholder}
			/>
			<ErrorMessage name={name}/>
		</>
	);
};

export const FormikInput = memo(FormikInputComponent);
