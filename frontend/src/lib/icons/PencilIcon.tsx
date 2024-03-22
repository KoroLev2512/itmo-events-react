import React from "react";
import { IconProps } from "./types";
import {MAIN_COLOR} from "../../ui/const/colors";


const PencilIcon = ({
	height = 16,
	width = 16,
	color = MAIN_COLOR
}: IconProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_472_1111)">
				<path
					d="M9 4.00009L1 12.0001V15.0001H4L12 7.00009M9 4.00009L11.2929 1.7072C11.6834 1.31667 12.3166 1.31667 12.7071 1.7072L14.2929 3.29298C14.6834 3.68351 14.6834 4.31667 14.2929 4.7072L12 7.00009M9 4.00009L12 7.00009"
					stroke={color}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_472_1111">
					<rect width="16" height="16" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default PencilIcon;
