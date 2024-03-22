import classNames from "classnames";
import React from "react";
import { ButtonProps } from "./types";
import styles from "./styles.module.scss";

export const BlankButton: React.FC<ButtonProps> = ({
	children,
	className,
	...restProps
}: ButtonProps) => {
	return (
		<button
			className={classNames(styles.button, styles.BlankButton, className)}
			type="button"
			{...restProps}
		>
			{children}
		</button>
	);
};
