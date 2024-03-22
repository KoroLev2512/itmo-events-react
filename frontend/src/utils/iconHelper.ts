export const getSvgOptions = ({
	rotationDegree,
}: {
  rotationDegree: number;
}) => {
	return {
		style: {
			transform: `rotate(${rotationDegree || 0}deg)`,
			transition: "all 0.25s ease-in",
		},
	};
};
