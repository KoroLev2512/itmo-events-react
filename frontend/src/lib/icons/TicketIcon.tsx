import React from "react";
import { GRAY_COLOR } from "ui/const/colors";
import { IconProps } from "./types";

const TicketIcon = ({
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
				d="M10.5 3V21"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeDasharray="3 4.5"
			/>
			<path
				d="M22.5 9V5.4C22.5 4.55992 22.5 4.13988 22.3365 3.81901C22.1927 3.53677 21.9632 3.3073 21.681 3.16349C21.3601 3 20.9401 3 20.1 3H3.9C3.05992 3 2.63988 3 2.31901 3.16349C2.03677 3.3073 1.8073 3.53677 1.66349 3.81901C1.5 4.13988 1.5 4.55992 1.5 5.4V9C3.15685 9 4.5 10.3431 4.5 12C4.5 13.6569 3.15685 15 1.5 15V18.6C1.5 19.4401 1.5 19.8601 1.66349 20.181C1.8073 20.4632 2.03677 20.6927 2.31901 20.8365C2.63988 21 3.05992 21 3.9 21L20.1 21C20.9401 21 21.3601 21 21.681 20.8365C21.9632 20.6927 22.1927 20.4632 22.3365 20.181C22.5 19.8601 22.5 19.4401 22.5 18.6V15C20.8431 15 19.5 13.6569 19.5 12C19.5 10.3431 20.8431 9 22.5 9Z"
				stroke={color}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default TicketIcon;
