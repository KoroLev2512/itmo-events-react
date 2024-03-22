import React from "react";

import styles from "./styles.module.scss";

import classNames from "classnames";

type MarginType = 8 | 16 | 24 | 32 | number;

type Props = {
  children: React.ReactNode;
  margin?: MarginType;
  className?: string;
};

export const Section = ({
	children,
	margin = 24,
	className,
}: Props & React.ComponentPropsWithRef<"div">) => {
	return (
		<div
			style={{ marginBottom: margin }}
			className={classNames(styles.section, className)}
		>
			{children}
		</div>
	);
};
