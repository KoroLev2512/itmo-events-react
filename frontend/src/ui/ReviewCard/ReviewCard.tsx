import React from "react";
import { ReviewStars } from "../ReviewStars";
import { Section } from "../Section";
import { Text } from "../Text";
import { UserPic } from "../UserPic";

import styles from "./styles.module.scss";

type Props = {
  name: string;
  description: string;
};

export const ReviewCard = ({ name, description }: Props) => {
	return (
		<div className={styles.reviewCard}>
			<Section margin={8}>
				<Section margin={14}>
					<UserPic
						className={styles.userPic}
						url="/thumbnail/default_person.png"
						height={54}
						width={54}
					/>
				</Section>
				<Text as="h3" className={styles.reviewOwner}>
					{name}
				</Text>
				<Text as="p" className={styles.description}>
					{description}
				</Text>
			</Section>
			<Section margin={20}>
				<ReviewStars stars={4} />
			</Section>
		</div>
	);
};
