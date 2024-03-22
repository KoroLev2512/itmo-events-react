import React from "react";
import { Settings } from "react-slick";
import { ReviewCard } from "../ReviewCard";
import { SlickSlider } from "../Slider";
import { Text } from "../Text";

import styles from "./styles.module.scss";

const settings: Settings = {
	arrows: false,
	dots: true,
	infinite: true,
	speed: 1250,
	slidesToShow: 1,
	slidesToScroll: 1,
	initialSlide: 0,
	className: styles.reviewSlider,
	autoplay: false,
};

const defaultReview = {
	name: "Королёв Юрий",
	description:
    "Большое спасибо за экскурсию в Карелию! Получил море положительных эмоций, классно провел время, увидел красивые места провел время, увидел красивые места ",
};

export const Reviews = () => {
	return (
		<div className={styles.card}>
			<Text as="h2" className={styles.title}>
        Отзывы
			</Text>
			<div className={styles.reviews}>
				<SlickSlider settings={settings}>
					<ReviewCard {...defaultReview} />
					<ReviewCard {...defaultReview} />
					<ReviewCard {...defaultReview} />
				</SlickSlider>
			</div>
		</div>
	);
};
