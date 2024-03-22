import React from "react";
import StarIcon, { StarStatus } from "../../lib/icons/StarIcon";
import styles from "./styles.module.scss";

const MAX_STARS = 5;

type Props = {
  stars: 1 | 2 | 3 | 4 | 5;
};

export const ReviewStars = ({ stars = 3 }: Props) => {
	const starsToRender = new Array(MAX_STARS)
		.fill(<></>)
		.map((el, index) => (
			<StarIcon
				key={index}
				color={index + 1 <= stars ? StarStatus.FILLED : StarStatus.UNFILLED}
			/>
		));

	return <div className={styles.bar}>{starsToRender}</div>;
};
