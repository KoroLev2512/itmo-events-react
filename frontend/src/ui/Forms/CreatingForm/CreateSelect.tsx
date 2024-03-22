import React from "react";
import classNames from "classnames";
import styles from "./createSelect.module.scss";
import Image from "next/image";
import removeIcon from "./icons/removeIcon.svg";


interface IProps {
	name: string;
	placeholder: string;
	answerType?: string;
	icon?: string;
	value: string[];
	onAddAnswer: () => void;
	onDeleteAnswer: (answerIndex: number) => void;
	updateValue: (newValue: string, index: number) => void;
}
const CreateSelect = (
	{name, placeholder, answerType, icon, value, onAddAnswer, onDeleteAnswer, updateValue}
		:IProps) => {
	return (
		<div>
			{value.map((_, index) => {
				return (
					<div key={index} className={classNames(styles.wrapper)}>
						{
							answerType === "radio" && icon ? (
								<Image
									src={icon}
									height="20"
									width="20"
									alt="work in progress"
								/>
							) : answerType === "checkbox" && icon ? (
								<Image
									src={icon}
									height="20"
									width="20"
									alt="work in progress"
								/>
							) : answerType === "tree" ? (
								<span style={{color: "var(--main-color)"}}>{index+1}.</span>
							) : (
								<div style={{display: "none"}}>default</div>
							)}
						<input
							value={value[index]}
							onChange={(e) => {
								updateValue(e.target.value, index);
							}}
							className={classNames(styles.formInput)}
							name={`${name}[${index}]`}
							placeholder={`${placeholder} ${index + 1}`}/>
						<Image
							onClick={() => onDeleteAnswer(index)}
							className={classNames(styles.removeIcon)}
							src={removeIcon}
							height="20"
							width="20"
							alt="work in progress"
						/>
					</div>
				);
			})
			}
			<button className={classNames(styles.addButton)} type="button" onClick={onAddAnswer}>Добавить ответ</button>
		</div>
	);
};

export default CreateSelect;
