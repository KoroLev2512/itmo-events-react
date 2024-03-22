import React from "react";
import Image from "next/image";
import {Text} from "../Text";
import CalendarIcon from "../../lib/icons/CalendarIcon";
import {SECONDARY_GRAY_COLOR} from "../const/colors";
import ClockIcon from "../../lib/icons/ClockIcon";
import {PrimaryButton} from "../Button";
import styles from "./styles.module.scss";
import {TransparentButton} from "../Button/TransparentButton";


const PastEventItem = () => {
	return (
		<div className={styles.pastEventsItem}>
			<Image src="/events/thumbnails/selo.jpg" width={84} height={84} alt="какой-то альт" className={styles.cardImage}/>
			<div className={styles.cardItemText}>
				<Text as="h4" className={styles.cardItemTitle}>
                    Экскурсия по Царскому селу
				</Text>
				<div className={styles.cardItemExtraInfo}>
					<Text><CalendarIcon width={14} height={14} color={SECONDARY_GRAY_COLOR}/>18 декабря</Text>
					<Text><ClockIcon width={14} height={14} color={SECONDARY_GRAY_COLOR}/>3 часа</Text>
				</div>
				<div className={styles.cardItemButtons}>
					<PrimaryButton>
                        Оставить отзыв
					</PrimaryButton>
					<TransparentButton>
                        Смотреть фото
					</TransparentButton>
				</div>
			</div>
		</div>
	);
};

export default PastEventItem;
