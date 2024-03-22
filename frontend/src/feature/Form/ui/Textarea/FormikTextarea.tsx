import {ErrorMessage, useField} from "formik";
import {ChangeEvent, memo, useCallback} from "react";
import {Textarea} from "../../../../shared/ui/Textarea/Textarea";
import {FormikFieldsPropsTypes} from "../../model/types/formikTypes";

export const TextareaFormComponent = (props: FormikFieldsPropsTypes & {defaultRows?: number}) => {
	const {name, label, defaultRows} = props;
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
		(event: ChangeEvent<HTMLTextAreaElement>) => {
			const newValue = event.target.value;
			setValue(newValue, touched);
		},
		[setValue, touched]
	);
	return (
		<>
			<Textarea label={label} onChange={onChangeHandler} onBlur={onBlurHandler} defaultRows={defaultRows}>
				{value}
			</Textarea>
			<ErrorMessage name={name}/>
		</>
	);
};

export const FormikTextarea = memo(TextareaFormComponent);
