import React from "react";
import { Section } from "ui/Section";
import { LevartEvents } from "ui/Levart";

export const LevartLayout = () => {
	return (
		<>
			<Section margin={16}>
				<LevartEvents/>
			</Section>
		</>
	);
};
