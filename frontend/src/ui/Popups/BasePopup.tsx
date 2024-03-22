import React, { ReactNode } from "react";

import classNames from "classnames";
import popupStyles from "./popup.module.scss";
import ClosePopupIcon from "../../lib/icons/ClosePopupIcon";
import Router from "next/router";

export const BasePopup = ({
	children,
	className,
	backUrl,
}: {
  children: ReactNode;
  className?: string;
  backUrl?: string;
}) => {
	const closePopup = () => {
		Router.push(backUrl || "/");
	};
	return (
		<div className={popupStyles.background}>
			<div className={popupStyles.popup}>
				<div className={popupStyles.closeButton} onClick={closePopup}>
					<ClosePopupIcon height={24} width={24} />
				</div>
				<div className={classNames(popupStyles.wrapper, className)}>
					{children}
				</div>
			</div>
		</div>
	);
};
