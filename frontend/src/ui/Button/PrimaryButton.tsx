import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import { ButtonProps } from "./types";

export const PrimaryButton: React.FC<ButtonProps> = ({
	children,
	className,
	...restProps
}: ButtonProps) => {
	return (
		<button
			className={classNames(styles.button, styles.primaryButton, className)}
			{...restProps}
		>
			{children}
		</button>
	);
};
