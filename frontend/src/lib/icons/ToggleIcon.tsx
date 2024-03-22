import React from "react";
import { IconProps } from "./types";

const ToggleIcon = ({
	// color,
	height = 18,
	width = 18,
	// rotation = 0,
}: IconProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_472_1278)">
				<path
					d="M22.5 9L22.5 1.5M22.5 1.5L15 1.5M22.5 1.5L15 9M1.5 15L1.5 22.5M1.5 22.5L9 22.5M1.5 22.5L9 15"
					stroke="black"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_472_1278">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default ToggleIcon;
