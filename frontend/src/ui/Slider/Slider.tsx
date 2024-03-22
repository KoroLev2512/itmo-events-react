import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  settings: Settings;
  children: React.ReactNode[];
  disabled?: boolean;
};

export const SlickSlider = ({
	settings,
	children,
	disabled = false,
}: Props) => {
	if (disabled) {
		return <>children[0]</>;
	}
	return <Slider {...settings}>{children}</Slider>;
};
