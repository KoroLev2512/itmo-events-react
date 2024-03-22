import classNames from "classnames";
import React, { ReactNode } from "react";
import { Text } from "../Text";
import styles from "./styles.module.scss";

export type CardProps = {
  image?: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export const Card = ({ image, title, description, className }: CardProps) => {
	return (
		<div className={classNames(styles.card, className)}>
			{image && <div className={styles.image}>{image}</div>}
			<div className={styles.textInfo}>
				<Text as="h3">{title}</Text>
				<Text as="p">{description}</Text>
			</div>
		</div>
	);
};
