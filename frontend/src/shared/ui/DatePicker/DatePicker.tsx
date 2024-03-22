import cls from "./DatePicker.module.scss";
import classNames from "classnames";
import {Text} from "ui/Text";
import React, {memo} from "react";
// eslint-disable-next-line import/named
import DatePickerBase, {ReactDatePickerProps} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {DateTime} from "luxon";
import localeRu from "date-fns/locale/ru";
import {BlankButton} from "ui/Button/BlankButton";


type DatePickerProps = Omit<ReactDatePickerProps, "onChange" | "value">

interface IDatePickerProps extends DatePickerProps {
	className?: string;
	value: string | null;
	label?: string;
	required?: boolean;
	onChange: (value: string | null) => void;
	withTime: boolean;
	additionalClassName;
}

const DatePickerComponent = (props: IDatePickerProps) => {
	const {
		className,
		value,
		label,
		required,
		onChange,
		withTime = true,
		additionalClassName
	} = props;

	const month = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь",
	];

	const onChangeHandler = (value: Date) => {
		onChange(DateTime.fromJSDate(value).toISO());
	};

	return (
		<div
			className={classNames(cls.InputWrapper, {[cls.profilesStylesWrapper]: additionalClassName === "profile"}, [className])}
		>
			{label && (
				// <div className={classNames(cls.label, { [cls.profilesStylesLabel]: additionalClassName === "profile"})}>
				<Text
					className={classNames(cls.label, {[cls.profilesStylesLabel]: additionalClassName === "profile"})}
					as='label'>
					{label}
				</Text>)}
			{/*{required && <span className={cls.requiredStar}>*</span>}*/}
			{/*</div>*/}
			{/*	)}*/}
			<DatePickerBase
				onKeyDown={(e) => e.preventDefault()}
				locale={localeRu}
				dateFormat={withTime ? "dd.MM.yyyy HH:mm" : "dd.MM.yyyy"}
				showPopperArrow={false}
				className={classNames(cls.Input, {[cls.profileStylesPicker]: additionalClassName === "profile"}, [className])}
				calendarClassName={classNames(cls.Calendar)}
				selected={value ? DateTime.fromISO(value).toJSDate() : null}
				onChange={onChangeHandler}
				placeholderText=''
				showTimeSelect={withTime}
				timeCaption="Время"
				renderCustomHeader={(
					{
						date,
						increaseYear,
						decreaseYear,
						nextYearButtonDisabled,
						prevYearButtonDisabled,

						decreaseMonth,
						increaseMonth,
						prevMonthButtonDisabled,
						nextMonthButtonDisabled,
					}
				) => (
					<div
						className={classNames(cls.Header)}
					>
						<BlankButton
							className={classNames(cls.HeaderBtn)}
							onClick={decreaseYear}
							disabled={prevYearButtonDisabled}>
							{"<<"}
						</BlankButton>
						<BlankButton
							onClick={decreaseMonth}
							disabled={prevMonthButtonDisabled}
							className={classNames(cls.HeaderBtn)}
						>
							{"<"}
						</BlankButton>
						<div className={classNames(cls.HeaderDate)}>
							<span>{month[date.getMonth()]}</span>
							<span>{date.getFullYear()}</span>
						</div>
						<BlankButton
							onClick={increaseMonth}
							disabled={nextMonthButtonDisabled}
							className={classNames(cls.HeaderBtn)}
						>
							{">"}
						</BlankButton>
						<BlankButton
							onClick={increaseYear}
							disabled={nextYearButtonDisabled}
							className={classNames(cls.HeaderBtn)}
						>
							{">>"}
						</BlankButton>
					</div>
				)}
			/>
		</div>
	);
};

export const DatePickerInput = memo(DatePickerComponent);
