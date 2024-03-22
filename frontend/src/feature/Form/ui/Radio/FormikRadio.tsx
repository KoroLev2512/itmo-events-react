import {ErrorMessage, useField} from "formik";
import {memo, useCallback} from "react";
import {FormikFieldsPropsTypes} from "../../model/types/formikTypes";
import {Radio} from "shared/ui/Radio/Radio";
import {isArray} from "lodash";

export const FormikRadioComponent = (props: FormikFieldsPropsTypes) => {
	const {name, label, answers} = props;
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
	if (!answers || !isArray(answers)) {
		return null;
	}
	return (
		<>
			<Radio
				label={label}
				onChange={onChangeHandler}
				onBlur={onBlurHandler}
				value={value}
				options={answers}
			/>
			<ErrorMessage name={name}/>
		</>
	);
};

export const FormikRadio = memo(FormikRadioComponent);
