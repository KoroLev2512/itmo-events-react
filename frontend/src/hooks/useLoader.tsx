import { useState, useEffect } from "react";

const useLoader = (loadingTime = 2000) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, loadingTime);

		return () => {
			clearTimeout(timer);
		};
	}, [loadingTime]);

	return isLoading;
};

export default useLoader;
