import React from "react";
import styles from "./styles.module.scss";
import { Layout } from "./types";

const DefaultWrapper = ({ children }: Layout) => {
	return <div className={styles.default}>{children}</div>;
};

export default DefaultWrapper;
