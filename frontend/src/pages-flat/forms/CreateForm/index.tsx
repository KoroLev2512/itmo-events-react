import styles from "./styles.module.scss";
import classNames from "classnames";
import React, {useEffect} from "react";
import {Section} from "ui/Section";
import CreatingFormPage from "ui/Forms/CreatingForm/CreatingFormPage";
import {useFormStore, IForm} from "entites/Forms";
import {useRouter} from "next/router";

interface ICreateFormProps {
    className?: string;
	mode: "create" | "edit";
}

export enum PageType {
	EDITOR = "editor",
	ANSWERS = "answers",
}


export const CreateForm = (props: ICreateFormProps) => {
	const { className, mode } = props;
	const {query} = useRouter();
	const [
		editForm,
		form,
		loadForm, resetForm,
		isLoading,
		createForm
	] = useFormStore(state => [
		state.editForm,
		state.form,
		state.loadForm,
		state.resetForm,
		state.isLoading,
		state.createForm
	]);

	useEffect(() => {
		if (mode === "edit" && query.formId) {
			loadForm(query.formId as string);
		}
		return resetForm();
	}, [loadForm, mode, query.formId, resetForm]);

	const onSubmitForm = (data: IForm) => {
		if (mode === "edit") {
			editForm(data, query.formId as string);
		} else if (mode === "create") {
			createForm(data);
		}
	};

	if (isLoading || mode === "edit" && !form) {
		return null;
	}
	return (
		<>
			<div className={classNames(styles.formsWrapper, {}, [className])}>
				<Section
					margin={16} className={classNames(styles.section)}>
					<CreatingFormPage form={mode === "edit" ? form : undefined} onSubmitForm={onSubmitForm}/>
				</Section>
			</div>
		</>

	);
};
