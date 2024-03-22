import classNames from "classnames";
import React, { FC } from "react";
import { Text } from "ui/Text";
import styles from "./style.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
  children: string;
  label: string;
}

export const Input: FC<Props> = ({
	children,
	label,
	className,
	...restProps
}) => {
	return (
		<div className={className}>
			<Text as={"p"}>{label}</Text>
			<input
				className={classNames(styles.input)}
				value={children}
				{...restProps}
			/>
		</div>
	);
};
