import Image from "next/image";
import React from "react";
import {Message, MessageProps} from "../../ui/Card/Message";
import Logotype from "../../ui/Logotype/Logotype";
import {Section} from "../../ui/Section";
import WorkerIcon from "../../../public/icons/worker-icon.svg";
import styles from "./errors.styles.module.scss";

const WorkerMessage: MessageProps = {
	description: "Сейчас наш сервис не доступен. Не волнуйтесь, крыша не обвалилась. Мы просто решили сделать этот сайт немного лучше. Скоро всё будет работать",
	title: "Внимание! Проводятся технические работы",
	image: (
		<Image
			src={WorkerIcon}
			height="100"
			width="100"
			alt="work in progress"
		/>
	),
};

const WorkerPage = () => {
	return (
		<div className={styles.wrapper}>
			<div>
				<Section>
					<Logotype/>
				</Section>
				<Message {...WorkerMessage} />
			</div>
		</div>
	);
};

export default WorkerPage;
