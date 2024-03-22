import { GRAY_COLOR } from "../../ui/const/colors";
import { IconProps } from "./types";
import React from "react";

const ClosePopupIcon = ({
	height = 36,
	width = 36,
	color = GRAY_COLOR,
}: IconProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="18" cy="18" r="18" fill="white" />
			<path
				d="M23.8008 23.625L18.1758 18M18.1758 18L12.5508 12.375M18.1758 18L23.8008 12.375M18.1758 18L12.5508 23.625"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export default ClosePopupIcon;
