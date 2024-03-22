import { MAIN_COLOR } from "../../ui/const/colors";

import { IconProps } from "./types";
import React from "react";

const ClockIcon = ({
	height = 18,
	width = 18,
	color = MAIN_COLOR,
}: IconProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_693_529)">
				<path
					d="M10 6.25V10H13.75M10 18.75C8.83895 18.75 8.25842 18.75 7.77105 18.6858C4.40555 18.2428 1.75724 15.5944 1.31416 12.2289C1.25 11.7416 1.25 11.1611 1.25 10C1.25 8.83895 1.25 8.25842 1.31416 7.77105C1.75724 4.40555 4.40555 1.75724 7.77105 1.31416C8.25842 1.25 8.83895 1.25 10 1.25C11.1611 1.25 11.7416 1.25 12.2289 1.31416C15.5944 1.75724 18.2428 4.40555 18.6858 7.77105C18.75 8.25842 18.75 8.83895 18.75 10C18.75 11.1611 18.75 11.7416 18.6858 12.2289C18.2428 15.5944 15.5944 18.2428 12.2289 18.6858C11.7416 18.75 11.1611 18.75 10 18.75Z"
					stroke={color}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_693_529">
					<rect width="20" height="20" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default ClockIcon;
