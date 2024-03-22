import React from "react";
import type { AppProps } from "next/app";
import AppWrapper from "ui/Wrappers/AppWrapper";
import {ServerGuard} from "guards/ServerGuard";
import "../../styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ServerGuard>
			<AppWrapper>
				<Component {...pageProps} />
			</AppWrapper>
		</ServerGuard>
	);
};

export default App;
