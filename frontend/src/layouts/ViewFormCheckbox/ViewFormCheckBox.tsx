import React from "react";
import styles from "./viewformcheckbos.module.scss";
import classNames from "classnames";

interface ViewFormCheckboxProps {
    id: number,
    name: string,
    options: { [id: number]: string },
    required: boolean,
    isEmpty: () => boolean
}

const ViewCheckbox: React.FC<ViewFormCheckboxProps> = ({id, name, options, required, isEmpty}) => {

	return (
		<>
			<div className={classNames(styles.formsWrapper)}>
				<div className={classNames(styles.block)}>
					{Object.keys(options).map(key =>
						<label key={key}>
							{/*<input type="checkbox" name={name} value={key}*/}
							{/*	checked={currentCheckBoxChoices[id] ? currentCheckBoxChoices[id].includes(Number(key)) : false}*/}
							{/*	onChange={handleChange} onClick={()=>setIsCheckBoxClicked(id, true)}/>*/}
							{/*{options[Number(key)]}*/}
						</label>
					)}
				</div>
			</div>
		</>
	);
};

export default ViewCheckbox;
