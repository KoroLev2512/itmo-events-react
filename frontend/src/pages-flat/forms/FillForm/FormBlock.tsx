import cls from "./styles.module.scss";
import classNames from "classnames";
import React from "react";

interface IFormBlockProps {
    children: React.ReactElement | null;
}

export const FormBlock = (props: IFormBlockProps) => {
	const { children } = props;
	return (
		<div
			className={classNames(cls.FormBlock)}
		>
			{children}
		</div>
	);
};
