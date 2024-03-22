import React, {ChangeEvent} from "react";
import classNames from "classnames";
import styles from "../../../ui/Forms/CreatingForm/creatingForm.styles.module.scss";
import Image from "next/image";
import bgIcon from "../../../ui/Forms/CreatingForm/icons/formBgIcon.svg";
import {isNull} from "lodash";

interface IProps {
	imageLink?: any;
	onUploadImage: (image: File) => void;
}
const UploadImage = ({imageLink, onUploadImage}: IProps) => {
	const onUploadImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (!isNull(e?.target?.files)) {
			onUploadImage(e.target.files[0]);
		}
	};

	return (
		<div
			className={classNames(styles.formHeaderImage)}
			style={{backgroundImage: `url(${imageLink})`}}>
			{imageLink && (
				<input
					id="uploadImage"
					type="file"
					accept="image/*"
					onChange={onUploadImageHandler}
				/>
			)}

			<label htmlFor={"uploadImage"} className={classNames(styles.uploadLabel)}>
				<Image
					src={bgIcon}
					height="24"
					width="24"
					alt="work in progress"
				/>
			</label>
		</div>
	);
};

export default UploadImage;