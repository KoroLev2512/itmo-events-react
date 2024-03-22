import classNames from "classnames";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

type Props = {
  url: string;
  width?: number;
  height?: number;
  className?: string;
};

export const UserPic = ({ url, height = 72, width = 72, className }: Props) => {
	return (
		<div className={classNames(styles.pic, className)}>
			<Image src={url} height={height} width={width} alt="person pic" />
		</div>
	);
};
