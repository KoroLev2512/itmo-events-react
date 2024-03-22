import React from "react";
import classNames from "classnames";
import styles from "./customSelect.styles.module.scss";
import {map} from "lodash";

interface IProps {
	options: Record<string, string>;
	name: string;
	dataState: string;
	value: string;
	onShowDropDownSelect: () => void;
	onChangeOption: (value: string) => void;
}
const CustomSelect = ({options, dataState, name, value, onShowDropDownSelect, onChangeOption}:IProps) => {
	return (
		<div style={{position: "relative", transition: "all 0.3s"}}>
			<div className={classNames(styles.select)} data-state={dataState}>
				<div
					onClick={onShowDropDownSelect}
					className={classNames(styles.selectTitle)}>{`${options[value]}`}</div>
				<div className={classNames(styles.selectContent)}>
					{
						map(options, (label: string, value: string) => (
							<label
								onClick={() => onChangeOption(value)}
								className={classNames(styles.selectLabel)} key={value}>
								<input
									className={classNames(styles.selectInput)}
									type="radio" value={label}  name={name}/>
								{label}
							</label>
						)
						)
					}
				</div>
			</div>
		</div>
	);
};

export default CustomSelect;
