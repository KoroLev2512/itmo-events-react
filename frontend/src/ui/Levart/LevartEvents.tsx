import React from "react";
import styles from "./styles.module.scss";
import LevartEventItem from "./LevartEventItem";
import LogoLevart from "../Logotype/levart";
import {TransparentButton} from "../Button/TransparentButton";

// interface IProps {
//
// }
//
// function levartFilter(status) {}

export const LevartEvents = () => {
	return (
		<div className={styles.cardSection}>
			<LogoLevart/>
			<div className={styles.buttons}>
				<TransparentButton>
                    Карьера
				</TransparentButton>
				<TransparentButton>
                    Образвание
				</TransparentButton>
				<TransparentButton>
                    Спорт
				</TransparentButton>
				<TransparentButton>
                    Культура
				</TransparentButton>
				<TransparentButton>
                    Бизнес
				</TransparentButton>
				<TransparentButton>
                    Другое
				</TransparentButton>
			</div>
			<div className={styles.cardList}>
				<LevartEventItem/>
				<LevartEventItem/>
				<LevartEventItem/>
				<LevartEventItem/>
				<LevartEventItem/>
				<LevartEventItem/>
				<LevartEventItem/>
			</div>
		</div>
	);
};

