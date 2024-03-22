import React from "react";
import { Card } from "../Card";

import styles from "./styles.module.scss";

export type MessageProps = {
  title: string;
  description: string;
  image?: React.ReactNode;
};

export const Message = (props: MessageProps) => {
	return <Card {...props} className={styles.message} />;
};
