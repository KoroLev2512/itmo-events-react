import React from "react";
import { GRAY_COLOR } from "ui/const/colors";
import { IconProps } from "./types";

const FormIcon = ({
	color = GRAY_COLOR,
	height = 20,
	width = 26,
}: IconProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 26 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21 8.25V18C21 21 19.21 22 17 22H9C6.79 22 5 21 5 18V8.25C5 5 6.79 4.25 9 4.25C9 4.87 9.24997 5.43 9.65997 5.84C10.07 6.25 10.63 6.5 11.25 6.5H14.75C15.99 6.5 17 5.49 17 4.25C19.21 4.25 21 5 21 8.25Z"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17 4.25C17 5.49 15.99 6.5 14.75 6.5H11.25C10.63 6.5 10.07 6.25 9.65997 5.84C9.24997 5.43 9 4.87 9 4.25C9 3.01 10.01 2 11.25 2H14.75C15.37 2 15.93 2.25 16.34 2.66C16.75 3.07 17 3.63 17 4.25Z"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9 13H13"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9 17H17"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>

	);
};

export default FormIcon;
