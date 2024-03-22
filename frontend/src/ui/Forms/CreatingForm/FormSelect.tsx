import React, {FC} from "react";
import {Field} from "formik";
import classNames from "classnames";
import styles from "./creatingForm.styles.module.scss";

export type optionType = {
    key: string,
    value: string;
}

interface IProps {
    name: string;
    style?: React.CSSProperties;
    options: optionType[];
	fieldId: number;
}

const FormSelect: FC<IProps> = ({options, name, ...props}) => {
	return (
		<div>
			<Field
				as='select'
				id={name}
				name={name}
				className={classNames(styles.selectOptions)}
				{...props}
			>
				{options.map(option => {
					return (
						<option className={classNames(styles.option)} key={option.value} value={option.value} >
							{option.key}
						</option>
					);
				})
				}
			</Field>
		</div>
	);
};

export default FormSelect;
