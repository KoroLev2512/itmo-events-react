import React from "react";
import { GRAY_COLOR } from "ui/const/colors";
import { IconProps } from "./types";

const HomeIcon = (
	{
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
				d="M4.5 8.35715V18C4.5 19.6569 5.84314 21 7.5 21H16.5C18.1569 21 19.5 19.6569 19.5 18V8.35715M4.5 8.35715L1.5 10.5M4.5 8.35715L12 3L19.5 8.35715M19.5 8.35715L22.5 10.5"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default HomeIcon;
