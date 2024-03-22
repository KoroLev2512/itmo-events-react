import React, {FC} from "react";
import {TransparentButton} from "../Button/TransparentButton";
import classNames from "classnames";
import styles from "./styles.module.scss";
import {PageType} from "pages-flat/forms/CreateForm";

interface IProps {
    pageType: PageType,
    setPageType: (pageType: PageType) => void,
	mode: "create" | "edit";
}

const FormsMenu: FC<IProps> = ({pageType, setPageType, mode}) => {

	const togglePageType = () => {
		setPageType(pageType === PageType.EDITOR
			? PageType.ANSWERS
			: PageType.EDITOR
		);
	};

	return (
		<div className={classNames(styles.menuWrapper)}>
			<TransparentButton
				className={classNames(styles.menuButton, {[styles.active]: pageType === PageType.EDITOR})}
				disabled={pageType === PageType.EDITOR}
				onClick={togglePageType}
			>
                Вопросы
			</TransparentButton>
			{mode === "edit" && (
				<TransparentButton
					className={classNames(styles.menuButton, {[styles.active]: pageType === PageType.ANSWERS})}
					disabled={pageType === PageType.ANSWERS}
					onClick={togglePageType}
				>
					Ответы
				</TransparentButton>
			)}
		</div>
	);
};

export default FormsMenu;
