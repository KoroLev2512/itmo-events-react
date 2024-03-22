import React from "react";
import { GRAY_COLOR } from "ui/const/colors";
import { IconProps } from "./types";

const WarningIcon = ({
	color = GRAY_COLOR,
	height = 20,
	width = 24,
}: IconProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 16.5V16.4648M12 7.5V12M22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12Z"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default WarningIcon;
