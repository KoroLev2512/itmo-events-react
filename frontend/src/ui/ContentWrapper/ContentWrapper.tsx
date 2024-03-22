import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

const ContentWrapper = ({ children }: React.PropsWithChildren) => {
	return (
		<div
			className={classNames(
				styles.outerWrapper
			)}
		>
			<div className={styles.wrapper}>{children}</div>
		</div>
	);
};

export default ContentWrapper;
