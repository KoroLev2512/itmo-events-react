import React, {FC} from "react";
import styles from "./creatingForm.styles.module.scss";
import classNames from "classnames";
import {Field} from "formik";

interface IProps {
	name: string;
	placeholder: string;
	style?: React.CSSProperties;
	isMainText?: boolean;
	type?: string
	as?: string;
}

const FormInput: FC<IProps> = (props) => {
	const {isMainText, ...restProps} = props;
	return (
		<Field
			{...restProps}
			className={
				isMainText ?
					classNames(styles.formInput, styles.formInputMainText) :
					classNames(styles.formInput)
			}
		/>
	);
};

export default FormInput;