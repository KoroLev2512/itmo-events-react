import React from "react";
import {Text} from "ui/Text";
import {Section} from "ui/Section";
import styles from "./styles.module.scss";
import {Formik} from "formik";
import {PrimaryButton} from "ui/Button";
import {SelectForm} from "ui/Select/ui/form";
import {FormikInput, FormikTextarea} from "feature/Form";
import {FormikDatePicker} from "feature/Form/ui/Datepicker/FormikDatePicker";
import {InputType} from "shared/ui/Input/Input";
import {Event} from "entites/Events";
import {cloneDeep} from "lodash";

interface IProps {
	action: (data: Event) => void;
	initialValues?: Event;
}

export const EventForm = (props: IProps) => {
	const {action, initialValues = {}} = props;
	const onSubmitHandler = (data: Event) => {
		const prepareData = cloneDeep(data);
		if (data.durationDays || data.durationHours) {
			prepareData.duration = (Number(data.durationDays || 0) * 24) + Number(data.durationHours || 0);
		}
		action(prepareData);
	};
	return (
		<>
			<Section margin={16}>
				<Text as="h1">Создание события</Text>
			</Section>
			<Formik initialValues={initialValues as Event} onSubmit={onSubmitHandler}>
				{(formik) => {
					return (
						<form className={styles.formWrapper} onSubmit={formik.handleSubmit}>
							<FormikInput name="title" label="Название события" type={InputType.OUTLINED}/>
							<FormikTextarea name="description" label="Описание"/>
							<div className={styles.twoInRow}>
								<FormikDatePicker name="eventStartDate" label="Дата начала события"/>
								<FormikDatePicker name="eventExpirationDate" label="Дата окончания события"/>
							</div>
							<div className={styles.twoInRow}>
								<FormikDatePicker name="regStartDate" label="Дата начала регистрации"/>
								<FormikDatePicker name="regExpirationDate" label="Дата окончания регистрации"/>
							</div>
							<FormikInput name="memberAmount" label="Планируемое количество участников" type={InputType.OUTLINED}/>
							<div className={styles.twoInRow}>
								<FormikInput name="durationDays" label="Фактическая длительность мероприятия" placeholder='дней' type={InputType.OUTLINED}/>
								<FormikInput name="durationHours" placeholder='часов'  type={InputType.OUTLINED}/>
							</div>
							<SelectForm label="Выберете форму" options={[
								{value: "Выезд в Ягодное", label: "Выезд в Ягодное"},
								{value: "Концерт импровизации", label: "Концерт импровизации"},
								{value: "Встреча клуба", label: "Встреча клуба"},
							]} name={"form"}/>
							{/*<PictureForm name "picture" label="Изображение для главной страницы"/>*/}
							<PrimaryButton className={styles.button} type="submit">Сохранить</PrimaryButton>
						</form>
					);}}
			</Formik>
		</>
	);
};

