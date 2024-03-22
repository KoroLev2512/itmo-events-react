import React from "react";
import Image from "next/image";
import {Text} from "../Text";
import CalendarIcon from "../../lib/icons/CalendarIcon";
import {SECONDARY_GRAY_COLOR} from "../const/colors";
import ClockIcon from "../../lib/icons/ClockIcon";
import styles from "./styles.module.scss";
import ArrowIcon from "../../lib/icons/ArrowIcon";


const LevartEventItem = () => {
	return (
		<div className={styles.cardItem}>
			<Image src="/events/thumbnails/selo.jpg" width={84} height={84} alt="какой-то альт" className={styles.cardImage}/>
			<div className={styles.cardItemText}>
				<div className={styles.cardItemExtraInfo}>
					<Text><CalendarIcon width={14} height={14} color={SECONDARY_GRAY_COLOR}/>18 декабря</Text>
					<Text><ClockIcon width={14} height={14} color={SECONDARY_GRAY_COLOR}/>18:00</Text>
				</div>
				<Text as="h4" className={styles.cardItemTitle}>
                    Экскурсия по Царскому селу
				</Text>
				<div>
					<Text>
                        Lorem ipsum sapiente temporibus ut voluptates! Aperiam esse odio quidem. Alias aliquam, aliquid commodi consectetur cupiditate dolorem doloremque, earum error eum fugiat in incidunt iste iusto nulla optio praesentium quidem saepe sunt suscipit voluptatem. Adipisci aliquid architecto asperiores aut consequuntur deleniti, dolorem dolores dolorum ea eligendi et expedita fuga inventore ipsa itaque laudantium magni modi neque nostrum porro quasi quisquam quo quos rerum sed, tempora ut.
					</Text>
				</div>
			</div>
			<div className={styles.arrowIcon}><ArrowIcon rotation={90} /></div>
		</div>
	);
};

export default LevartEventItem;
