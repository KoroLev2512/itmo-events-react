import React from "react";
import classNames from "classnames";
import styles from "./creatingForm.styles.module.scss";
import FormInput from "./FormInput";
import {ErrorMessage} from "formik";
import FormAnswer, {AnswerType} from "./FormAnswer";
import CustomCheckboxForm from "./CustomCheckboxForm";
import Image from "next/image";
import binIcon from "./icons/binIcon.svg";
import {FieldTypes} from "entites/Forms";
import SelectCreatingFormPage from "./SelectCreatingFormPage";


interface IProps {
	name: string;
	fieldId: number;
	arrayHelpers: {
		remove: (id:number) => void;
	};
}


export type FieldType = {
	title: string;
	answers?: AnswerType;
	fieldType?: FieldTypes;
	required?: boolean;
	fieldId: number;
	isHidden: boolean;
}
const FormQuestion: React.FC<IProps> = ({fieldId, arrayHelpers, name}) => {

	const dropdownOptions: Record<string, string> = {
		"text": "Текст (строка)",
		"textarea": "Текст (абзац)",
		"radio": "Один из списка",
		"checkbox": "Несколько из списка",
		// "tree": "Раскрывающийся список",
	};

	return (
		<div className={classNames(styles.questionForm)}>
			<div>
				<FormInput
					name={name + "title"} placeholder="Вопрос"
					style={{fontSize: "24px"}}/>
				<ErrorMessage
					className={classNames(styles.errorMessage)}
					component='div' name={name + "title"}/>
				<FormAnswer fieldId={fieldId} name={name + "answers"}/>
			</div>
			<div>
				<div>
					<SelectCreatingFormPage
						fieldId={fieldId}
						options={dropdownOptions}
						name={name + "fieldType"}/>
				</div>
				<div className={classNames(styles.required)}>
					<CustomCheckboxForm name={`${name}required`} label="Обязательный вопрос"/>
					<Image
						className={classNames(styles.binIcon)}
						onClick={() => arrayHelpers.remove(fieldId)}
						src={binIcon}
						height="24"
						width="24"
						alt="work in progress"
					/>
				</div>
			</div>
		</div>
	);
};

export default FormQuestion;
