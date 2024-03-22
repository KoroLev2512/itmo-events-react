import cls from "./Input.module.scss";
import classNames from "classnames";
import {Text} from "ui/Text";
import React, {ChangeEvent, InputHTMLAttributes, memo} from "react";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">

export enum InputType {
	BASE = "base",
	OUTLINED = "outlined"
}

interface IInputProps extends InputProps{
    className?: string;
	value: string;
	label?: string;
	required?: boolean;
	onChange: (value: string) => void;
	type?: InputType
}

export const InputComponent = (props: IInputProps) => {
	const {
		className,
		value,
		label,
		required,
		onChange,
		type = InputType.BASE,
		placeholder = "Введите ваш ответ...",
		...restProps
	} = props;

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<div
			className={classNames(cls.InputWrapper, {}, [className])}
		>
			{label && (
				<div className={classNames(cls.label, {}, [className, cls[type]])}>
					<Text as='label'>
						{label}
					</Text>
					{required && <span className={cls.requiredStar}>*</span>}
				</div>
			)}
			<input
				className={classNames(cls.Input, {}, [className, cls[type]])}
				value={value}
				type='text'
				onChange={onChangeHandler}
				placeholder={placeholder}
				{...restProps}
			/>
		</div>
	);
};

export const Input = memo(InputComponent);
