import React from "react";
import { IconProps } from "./types";

export enum StarStatus {
	// eslint-disable-next-line no-unused-vars
  FILLED = "#ffe074",
  // eslint-disable-next-line no-unused-vars
  UNFILLED = "#d9d9d9",
}

type StarProps = IconProps & {
  color: StarStatus;
};

const StarIcon = ({
	color = StarStatus.UNFILLED,
	height = 32,
	width = 32,
}: StarProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20 5L25.4078 15.6983L37.5 17.4139L28.75 25.7414L30.8156 37.5L20 31.9483L9.18441 37.5L11.25 25.7414L2.5 17.4139L14.5922 15.6983L20 5Z"
				fill={color}
				stroke={color}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default StarIcon;
