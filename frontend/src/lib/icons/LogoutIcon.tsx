import React from "react";
import { IconProps } from "./types";
import {MAIN_COLOR} from "../../ui/const/colors";

const LogoutIcon = ({ height = 12, width = 12, color = MAIN_COLOR }: IconProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_472_1113)">
				<path
					d="M9 4V1H1M1 1V11L6 15V5L1 1ZM9 10H15M15 10L12 7M15 10L12 13"
					stroke={color}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_472_1113">
					<rect width="16" height="16" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default LogoutIcon;
