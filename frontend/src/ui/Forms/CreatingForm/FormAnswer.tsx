import React, {useCallback} from "react";
import FormInput from "./FormInput";
import {useFormikContext} from "formik";
import classNames from "classnames";
import styles from "./creatingForm.styles.module.scss";
import CreateSelect from "./CreateSelectForm";
import multiSelectIcon from "./icons/multiSelectIcon.svg";
import selectIcon from "./icons/selectIcon.svg";
import {FieldType} from "./FormQuestion";
import {FieldTypes} from "entites/Forms";


interface IProps {
	name: string;
	fieldId: number;
}

export type AnswerType = string | string[];

const FormAnswer: React.FC<IProps> = ({fieldId, name}) => {
	const Formik = useFormikContext<{fields: FieldType[]}>();
	const {values: {fields}} = Formik;
	const answersType = fields[fieldId].fieldType;

	const customSwitch = useCallback(() => {
		switch (answersType) {
		case FieldTypes.TEXT:
			return <FormInput name={name} placeholder='Краткий ответ'/>;
		case FieldTypes.TEXTAREA:
			return <FormInput name={name} placeholder='Краткий ответ'/>;
		case FieldTypes.RADIO:
			return <CreateSelect icon={selectIcon} answerType={answersType} name={name} placeholder="Варинт ответа"/>;
		case FieldTypes.CHECKBOX:
			return <CreateSelect icon={multiSelectIcon} answerType={answersType} name={name} placeholder="Варинт ответа"/>;
		default:
			return <div>Выбран default</div>;
		}
	}, [answersType, name]);


	return (
		<div className={classNames(styles.answers)}>
			{customSwitch()}
		</div>
	);
};

export default FormAnswer;
