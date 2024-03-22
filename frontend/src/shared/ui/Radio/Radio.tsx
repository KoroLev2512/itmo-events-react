import cls from "./Radio.module.scss";
import classNames from "classnames";
import {Text} from "ui/Text";
import React, {ChangeEvent, InputHTMLAttributes, memo} from "react";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">

interface IRadioProps extends InputProps{
    className?: string;
	label?: string;
	options: string[];
	value: string;
	onChange: (value: string) => void;
	required?: boolean;
}

const RadioComponent = (props: IRadioProps) => {
	const {
		className,
		label,
		options,
		value,
		onChange,
		required,
		...restProps
	} = props;

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<div
			className={classNames(cls.Radio, {}, [className])}
		>
			{label && (
				<div className={cls.label}>
					<Text as='label'>
						{label}
					</Text>
					{required && <span className={cls.requiredStar}>*</span>}
				</div>
			)}
			<div className={cls.optionsList}>
				{options.map((item) => (
					<div className={cls.inputWrapper} key={item}>
						<input
							type="radio"
							checked={item === value}
							name={item}
							value={item}
							onChange={onChangeHandler}
							className={cls.radioItem}
							{...restProps}
						/>
						<label htmlFor={item}>{item}</label>
					</div>
				))}
			</div>
		</div>
	);
};

export const Radio = memo(RadioComponent);
