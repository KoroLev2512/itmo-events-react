import React from "react";
import {MAIN_COLOR} from "../../ui/const/colors";
import {IconProps} from "./types";

const UserIcon = ({
	color = MAIN_COLOR,
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
				d="M3 22.5V19.5C3 17.0147 5.01472 15 7.5 15H16.5C18.9853 15 21 17.0147 21 19.5V22.5M12 1.5C9.70789 1.5 7.5 3.28548 7.5 6C7.5 8.29211 9.28548 10.5 12 10.5C14.7145 10.5 16.5 8.29211 16.5 6C16.5 3.28548 14.2921 1.5 12 1.5Z"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default UserIcon;
