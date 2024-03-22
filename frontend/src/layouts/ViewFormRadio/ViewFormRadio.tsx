import React from "react";
import classNames from "classnames";
import styles from "./viewformradio.styles.module.scss";

interface ViewFormRadioProps {
    id: number,
    name: string,
    options: { [value: number]: string },
    required: boolean,
    isEmpty: () => boolean;
}

const ViewFormRadio: React.FC<ViewFormRadioProps> = ({id, name, options, required, isEmpty}) => {
	const isChecked = (key: string) => {
		// return currentChoices[Number(id)] === Number(key);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// setCurrentChoice(id, Number(event.target.value));
	};


	return (
		<>
			<div className={classNames(styles.formsWrapper)}>
				<div className={classNames(styles.block)}>
					<label style={{fontSize: "1.5em", fontFamily: "Semibold"}} htmlFor="q1">
						{name}
						{required && <span>&nbsp;*</span>}
					</label>
					{Object.keys(options).map(key => (
						<label className={styles.choiceText} key={key}>
							{/*<input key={key}*/}
							{/*	type="radio"*/}
							{/*	name={name}*/}
							{/*	value={key}*/}
							{/*	checked={isChecked(key)}*/}
							{/*	onChange={handleChange}*/}
							{/*	onClick={() => addIsRadioClicked(id, true)}*/}
							{/*/>*/}
							{options[Number(key)]}
						</label>
					))}
					{/*<button className={styles.removeButton} onClick={() => setCurrentChoice(id, null)}>Сбросить</button>*/}
				</div>
			</div>
		</>
	);
};

export default ViewFormRadio;
