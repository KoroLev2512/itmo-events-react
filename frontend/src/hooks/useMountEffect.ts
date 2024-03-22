import {useEffect} from "react";

export const useMountEffect = (func: () => void) => useEffect(func, []); // eslint-disable-line react-hooks/exhaustive-deps

