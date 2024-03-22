import styles from "./styles.module.scss";
import classNames from "classnames";
import {Form, Formik} from "formik";
import {Section} from "ui/Section";
import {Text} from "ui/Text";
import React from "react";
import {FormBlock} from "./FormBlock";
import {GetFormItem} from "./GetFormItem";
import {FieldTypes} from "entites/FillForm";
import {PrimaryButton} from "../../../ui/Button";

interface IFillFormProps {
	form: {
		title: string;
		description: string;
		fields: {
			title: string;
			isHidden: boolean;
			fieldId: number;
			answers?: string[] | string;
			fieldType?: FieldTypes;
			required?: boolean;
		}[]
	};
	onSubmit: (data: Record<number, string>) => void;
}



export const FillForm = (props: IFillFormProps) => {
	const {form, onSubmit} = props;

	return (
		<div className={styles.FillFormWrapper}>
			<Formik initialValues={{}} onSubmit={onSubmit}>
				{() => {
					return (
						<Form className={classNames(styles.formWrapper)}>
							<Section>
								<div className={classNames(styles.formsWrapper)}>
									<Text as={"h1"}>
										{form.title}
									</Text>
									<Text as={"p"}>
										{form.description}
									</Text>
								</div>
							</Section>
							<div className={styles.FieldsList}>
								{form.fields?.filter(item => !item.isHidden).map((item) => (
									<FormBlock key={item.fieldId}>
										<GetFormItem field={item} />
									</FormBlock>
								))}
							</div>
							<div className={styles.formFooter}>
								<PrimaryButton type="submit">
									Отправить
								</PrimaryButton>
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>


	);
};
