import cls from "./Checkbox.module.scss";
import classNames from "classnames";
import {Text} from "ui/Text";
import React, {ChangeEvent, InputHTMLAttributes, memo} from "react";
import {isArray} from "lodash";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">

interface ICheckboxProps extends InputProps{
    className?: string;
	label?: string;
	required?: boolean;
	value: string[];
	options: string[];
	onChange: (value: string[]) => void;
}

const CheckboxComponent = (props: ICheckboxProps) => {
	const { className, options, required, label, value = [], onChange } = props;

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const {value: newValue, checked} = e.target;
		onChange(checked ? [...value, newValue] : [...value.filter(item => item !== newValue)]);
	};

	return (
		<div
			className={classNames(cls.Checkbox, {}, [className])}
		>
			{label && (
				<div className={cls.label}>
					<Text as='label'>
						{label}
					</Text>
					{required && <span className={cls.requiredStar}>*</span>}
				</div>
			)}
			<div className={cls.answersList}>
				{options.map(item => (
					<div key={item} className={cls.inputWrapper}>
						<input
							type="checkbox"
							checked={value.includes(item)}
							onChange={onChangeHandler}
							value={item}
							className={cls.checkboxItem}
						/>
						<label key={item} htmlFor={item}>
							{item}
						</label>
					</div>
				))}
			</div>
		</div>
	);
};

export const Checkbox = memo(CheckboxComponent);
