import React from "react";
import Image from "next/image";
import notCheckedIcon from "./icons/checkedIcon.svg";
import checkedIcon from "./icons/notCheckedIcon.svg";
import {isUndefined} from "lodash";
import styles from "./customCheckbox.styles.module.scss";
import classNames from "classnames";

interface IProps {
	label: string;
	value?: boolean;
	onChange: (e: undefined | boolean) => void;
}
const Checkbox: React.FC<IProps> = ({onChange, value, label}) => {
	const handleCheckboxChange = () => {
		onChange( value === true ? undefined : true);
	};

	return (
		<div className={classNames(styles.checkboxContainer)} onClick={handleCheckboxChange}>
			{!isUndefined(value) ?
				(<Image
					src={notCheckedIcon}
					height="20"
					width="20"
					alt="Checked"
				/>)
				: (<Image
					src={checkedIcon}
					height="20"
					width="20"
					alt="Not Checked"
				/>)}
			<div className={classNames(styles.checkboxLabel)}>{label}</div>

		</div>
	);
};

export default Checkbox;
