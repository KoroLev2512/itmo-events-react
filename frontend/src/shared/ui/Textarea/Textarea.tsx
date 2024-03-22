import cls from "./Textarea.module.scss";
import classNames from "classnames";
import TextareaAutosize from "react-textarea-autosize";
import { Text } from "ui/Text";
import React, {ChangeEvent, memo} from "react";

interface ITextareaProps {
    className?: string;
	children: JSX.Element | string;
	label?: string;
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur: () => void;
	required?: boolean;
	defaultRows?: number;
}

const TextareaComponent = (props: ITextareaProps) => {
	const {
		className,
		children,
		label,
		required,
		defaultRows = 3,
		...restProps
	} = props;

	return (
		<div className={cls.TextareaWrapper}>
			{label && (
				<div className={classNames(cls.label)}>
					<Text as='label'>
						{label}
					</Text>
					{required && <span className={cls.requiredStar}>*</span>}
				</div>
			)}
			<TextareaAutosize
				minRows={defaultRows}
				placeholder='Введите ваш ответ...'
				className={classNames(cls.Textarea, {}, [className])}
				{...restProps}
			>
				{children}
			</TextareaAutosize>
		</div>
	);
};

export const Textarea = memo(TextareaComponent);
