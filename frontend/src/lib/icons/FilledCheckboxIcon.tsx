import React from "react";
import { GRAY_COLOR } from "../../ui/const/colors";
import { IconProps } from "./types";

const FilledCheckboxIcon = ({
	color = GRAY_COLOR,
	height = 16,
	width = 16,
}: IconProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_945_1577)">
				<path
					d="M11 6L7.8643 9.18724C7.33121 9.72908 7.06467 10 6.73346 10C6.40225 10 6.13571 9.72908 5.60263 9.18724L5 8.57471M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
					stroke={color}
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_945_1577">
					<rect width="16" height="16" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default FilledCheckboxIcon;
