import React from "react";
import { IconProps } from "./types";
import {MAIN_COLOR} from "../../ui/const/colors";


const BellIcon = ({
	color = MAIN_COLOR,
	height = 18,
	width = 18,
	// rotation = 0,
}: IconProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 25 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16.5336 16.5236C16.9037 18.7387 15.8499 22.5 12.0906 22.5C8.33135 22.5 7.27896 18.7387 7.64905 16.5236M12.0906 1.5C9.83507 1.5 7.98287 2.19525 6.82764 4.5C5.32393 7.5 7.5795 12 3.06836 16.5H21.1129C16.6018 12 18.8573 7.5 17.3536 4.5C16.1984 2.19525 14.3462 1.5 12.0906 1.5Z"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default BellIcon;
