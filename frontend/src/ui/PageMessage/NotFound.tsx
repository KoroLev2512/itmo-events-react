import React from "react";
import styles from "./styles.module.scss";

export const NotFound = () => {
	return (
		<div className={styles.messageCard}>
			<div className={styles.image}></div>
			<div className={styles.title}></div>
			<div className={styles.description}></div>
		</div>
	);
};
