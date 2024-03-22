import React, {useRef} from "react";
import classNames from "classnames";
import styles from "./creatingForm.styles.module.scss";
import FormInput from "./FormInput";
import addQuestionIcon from "./icons/addQuestionIcon.svg";
import {array, boolean, mixed, object, string} from "yup";
// eslint-disable-next-line import/named
import {ErrorMessage, FieldArray, Form, Formik, FormikHelpers} from "formik";
import FormQuestion, {FieldType} from "./FormQuestion";
import Image from "next/image";
import {AnswerType} from "./FormAnswer";
import {PrimaryButton} from "../../Button";
import {cloneDeep} from "lodash";
import UploadImageForm from "feature/Form/ui/UploadImageForm/UploadImageForm";
import {FieldTypes} from "entites/Forms";


interface FormValues {
	title: string;
	description: string;
	fields: FieldType[];
}

interface IProps {
	form?: FormValues;
	onSubmitForm: (data: FormValues) => void;
}

const CreatingFormPage = (props: IProps) => {
	const {form, onSubmitForm} = props;


	const emptyField: FieldType = {
		title: "",
		answers: "" as AnswerType,
		fieldType: FieldTypes.TEXT,
		fieldId: -1,
		isHidden: false
	};
	const initialValues: FormValues = {
		title: "",
		description: "",
		fields: [emptyField],
	};
	const hiddenFields: FieldType[] = [
		{
			title: "isu",
			isHidden: true,
			fieldId: -1
		},
		{
			title: "phone",
			isHidden: true,
			fieldId: -1
		},
		{
			title: "name",
			isHidden: true,
			fieldId: -1
		},
		{
			title: "status",
			isHidden: true,
			fieldId: -1
		},
		{
			title: "comment",
			isHidden: true,
			fieldId: -1
		},
	];
	const CreateFormSchema = object().shape(
		{
			title: string()
				.min(2, "Слишком короткое")
				.max(50, "Слишком длинное")
				.required("Необходимо заполнить поле"),
			description: string()
				.min(2, "Слишком короткое")
				.max(500, "Слишком длинное")
				.required("Необходимо заполнить поле"),
			fields: array().of(object().shape({
				title: string()
					.min(2, "Слишком короткое")
					.max(50, "Слишком длинное")
					.required("Необходимо заполнить поле"),
				answers: mixed<string | string[]>().default(""),
				fieldType: string().default("text"),
				required: boolean().optional().default(undefined)
			}))
		}
	);
	const ArrayHelperRef = useRef<typeof FieldArray>();

	const onSubmitHandler = (values: FormValues, actions: FormikHelpers<FormValues>) => {
		const preparedValues = cloneDeep(values);
		preparedValues.fields.unshift(...hiddenFields);
		preparedValues.fields = preparedValues.fields.map((value, index) => {
			return {...value, fieldId: index};
		});
		onSubmitForm(preparedValues);
		actions.setSubmitting(false);
	};
	const getPreparedInitialValues = (init: FormValues) => {
		return {
			...init,
			fields: init?.fields.filter(item => item?.isHidden !== true)
		};
	};

	return (
		<Formik
			initialValues={form ? getPreparedInitialValues(form) : initialValues}
			onSubmit={onSubmitHandler}
			validationSchema={CreateFormSchema}
		>
			{({values}) => {
				return (
					<Form className={classNames(styles.formWrapper)}>
						<div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
							<div className={classNames(styles.formHeader)}>
								<UploadImageForm />
								<div className={classNames(styles.formTitleWrapper)}>
									<FormInput
										name="title"
										placeholder="Новая форма"
										isMainText={true}
									/>
									<ErrorMessage
										className={classNames(styles.errorMessage)}
										component='div' name='title'/>
									{/*//TODO Сделать перенос строки (расширения поля ввода вниз) в описании опросника Пашин компонент textField*/}
									<FormInput
										// as="textArea"
										name="description"
										placeholder="Описание"
										style={{
											marginTop: "20px",
											// minWidth: "100%", maxWidth: "100%"
										}}/>
									<ErrorMessage
										className={classNames(styles.errorMessage)}
										component='div' name="description"/>
								</div>
							</div>
							<FieldArray name='fields'
								render={(arrayHelpers: any) => {
									ArrayHelperRef.current = arrayHelpers;
									const {fields} = values;
									return(
										<div>
											{fields && fields.map(
												(field: FieldType, index: number) => {
													return (
														<FormQuestion
															arrayHelpers={arrayHelpers}
															key={index}
															name={`fields[${index}].`}
															fieldId={index}
														/>
													);
												}
											)}
										</div>
									);
								}}
							/>
							<Image
								className={classNames(styles.addQuestionIcon)}
								onClick={() => ArrayHelperRef.current.push(emptyField)}
								src={addQuestionIcon}
								height="24"
								width="24"
								alt="work in progress"
							/>
						</div>
						<div>
							<PrimaryButton type="submit">Опубликовать форму</PrimaryButton>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
}
;

export default CreatingFormPage;



