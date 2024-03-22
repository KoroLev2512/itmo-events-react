import React from "react";
import styles from "./styles.module.scss";

const Loader: React.FC = () => {
	return (
		<div className={styles.mainWrapper}>
			<div className={styles.loadingWrapper}>
				<div className={styles.wheelhamster}>
					<div className={styles.wheel}></div>
					<div className={styles.hamster}>
						<div className={styles.hamster__body}>
							<div className={styles.hamster__head}>
								<div className={styles.hamster__ear}></div>
								<div className={styles.hamster__eye}></div>
								<div className={styles.hamster__nose}></div>
							</div>
							<div className={`${styles.hamster__limb} ${styles["hamster__limb--fr"]}`}></div>
							<div className={`${styles.hamster__limb} ${styles["hamster__limb--fl"]}`}></div>
							<div className={`${styles.hamster__limb} ${styles["hamster__limb--br"]}`}></div>
							<div className={`${styles.hamster__limb} ${styles["hamster__limb--bl"]}`}></div>
							<div className={styles.hamster__tail}></div>
						</div>
					</div>
					<div className={styles.spoke}></div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
