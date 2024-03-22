import { IconProps } from "./types";
import React from "react";
import { ICON_COLOR } from "../../ui/const/colors";

const CalendarIcon = ({
	color = ICON_COLOR,
	height = 17,
	width = 16,
	// rotation = 0,
}: IconProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 17 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_472_1048)">
				<path
					d="M5.31854 2H4.48217C3.31115 2 2.72564 2 2.27837 2.21799C1.88495 2.40973 1.56508 2.71569 1.36461 3.09202C1.13672 3.51984 1.13672 4.0799 1.13672 5.2V7M5.31854 2H11.5913M5.31854 2V1M5.31854 2V4M11.5913 2H12.4276C13.5986 2 14.1842 2 14.6314 2.21799C15.0249 2.40973 15.3447 2.71569 15.5452 3.09202C15.7731 3.51984 15.7731 4.0799 15.7731 5.2V7M11.5913 2V1M11.5913 2V4M15.7731 7V11.8C15.7731 12.9201 15.7731 13.4802 15.5452 13.908C15.3447 14.2843 15.0249 14.5903 14.6314 14.782C14.1842 15 13.5986 15 12.4276 15H4.48217C3.31115 15 2.72564 15 2.27837 14.782C1.88495 14.5903 1.56508 14.2843 1.36461 13.908C1.13672 13.4802 1.13672 12.9201 1.13672 11.8V7M15.7731 7H1.13672"
					stroke={color}
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_472_1048">
					<rect
						width="16.7273"
						height="16"
						fill="white"
						transform="translate(0.0917969)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default CalendarIcon;
