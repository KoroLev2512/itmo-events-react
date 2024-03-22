import {Text} from "ui/Text";
import {ChangeEventHandler} from "react";
import cls from "./Select.module.scss";

interface IProps {
	label: string;
	options: { value: string; label: string; }[];
	onChange: ChangeEventHandler<HTMLSelectElement>;
	onBlur: () => void;
	value: string;
}

export const SelectComponent = (props: IProps) => {
	const { label, options, onChange, onBlur, value} = props;

	return (
		<div>
			<Text as={"p"}>{label}</Text>
			<select onChange={onChange} onBlur={onBlur} value={value} className={cls.select}>
				{options.map(item => (
					<option key={item.value} value={item.value}>{item.label}</option>
				))}
			</select>
		</div>
	);
};
