import React from "react";
import {SecondaryButton, PrimaryButton} from "../Button";
import styles from "./styles.module.scss";

interface IProps {
    status: string;
}
const StatusButton = (props: IProps) => {
	const { status } = props;

	const getStatusText = () => {
		let text = "";
		switch (status) {
		case "new":
			text = "В обработке";
			break;
		case "canceled":
			text = "Отклонено";
			break;
		case "accepted":
			text = "Подтверждено";
			break;
		default:
			break;
		}
		return text;
	};

	let buttonComponent = <PrimaryButton className={styles.requestsButton}>{getStatusText()}</PrimaryButton>;

	switch (status) {
	case "new":
		buttonComponent = <SecondaryButton className={styles.requestsButton}>{getStatusText()}</SecondaryButton>;
		break;
	case "canceled":
	case "accepted":
		buttonComponent = <PrimaryButton className={styles.requestsButton}>{getStatusText()}</PrimaryButton>;
		break;
	default:
		break;
	}
	return(<>{buttonComponent}</>);
};

export default StatusButton;
