import React, {FC, useState} from "react";
import CustomSelect from "../../../../shared/ui/customSelect/CustomSelect";


export type optionType = {
	label: string,
	value: string;
}

interface IProps {
	name: string;
	style?: React.CSSProperties;
	options: Record<string, string>;
	value: string;
	prepareOnChange: (value: string) => void;
}


const FormCustomSelect: FC<IProps> = ({options, name, value, prepareOnChange}) => {
	const [dataState, setDataState] = useState("");

	const onShowDropDownSelect = () => {
		if (dataState === "active") {
			setDataState("");
		} else {
			setDataState("active");
		}
	};
	const onChangeOption = (value: string) => {
		prepareOnChange(value);
		setDataState("");
	};

	return (
		<CustomSelect
			options={options} name={name}
			value={value} dataState={dataState}
			onChangeOption={onChangeOption}
			onShowDropDownSelect={onShowDropDownSelect}
		/>
	);
}
;

export default FormCustomSelect;
