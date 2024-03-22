import React, { useState } from "react";
import EmptyCheckboxIcon from "../../lib/icons/EmptyCheckboxIcon";
import FilledCheckboxIcon from "../../lib/icons/FilledCheckboxIcon";
import { Text } from "../Text";
import styles from "./style.module.scss";

type Props = {
  defaultStatus?: boolean;
  disabled?: boolean;
  children?: string;
};

export const Checkbox = ({
	defaultStatus = false,
	disabled = false,
	children,
}: Props) => {
	const [status, setStatus] = useState(defaultStatus);

	const handleChange = () => {
		if (disabled) {
			return;
		}

		setStatus(!status);
	};
	return (
		<div className={styles.checkbox} onClick={handleChange}>
			{status ? <FilledCheckboxIcon /> : <EmptyCheckboxIcon />}
			{children && (
				<Text as={"p"} className={styles.label}>
					{children}
				</Text>
			)}
		</div>
	);
};
