import React from "react";
import { MenuProps } from "./types";
import styles from "./styles.module.scss";

export const Menu = ({ children }: MenuProps) => {
	return <ul className={styles.menu}>{children}</ul>;
};

