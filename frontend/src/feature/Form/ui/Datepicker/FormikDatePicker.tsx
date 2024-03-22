import {ErrorMessage, useField} from "formik";
import {memo, useCallback} from "react";
import {FormikFieldsPropsTypes} from "../../model/types/formikTypes";
import {DatePickerInput} from "../../../../shared/ui/DatePicker/DatePicker";
interface IFormikDatePickerProps extends FormikFieldsPropsTypes {
	withTime?: boolean,
	additionalClassName?: string;
}

const FormikDatePickerComponent = (props: IFormikDatePickerProps) => {
	const {name, label, withTime, additionalClassName} = props;
	const [field, meta, helpers] = useField<string | null>(name);
	const {value} = field;
	const {touched} = meta;
	const {setValue, setTouched} = helpers;

	const onBlurHandler = useCallback(() => {
		if (!touched) {
			setTouched(true, true);
		}
	}, [touched, setTouched]);

	const onChangeHandler = useCallback(
		(value: string | null) => {
			setValue(value, touched);
		},
		[setValue, touched]
	);

	return (
		<>
			<DatePickerInput
				label={label}
				onChange={onChangeHandler}
				onBlur={onBlurHandler}
				value={value}
				withTime={withTime}
				additionalClassName={additionalClassName}
			/>
			<ErrorMessage name={name}/>
		</>
	);
};

export const FormikDatePicker = memo(FormikDatePickerComponent);
