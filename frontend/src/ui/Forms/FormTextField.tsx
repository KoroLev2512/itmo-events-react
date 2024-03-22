import React, {FC} from "react";

interface IProps {
    nameFormItem: string;
    id: number;
    required: boolean;
    question: string;
    changeFormInputContent: (value: string) => void;
    isEmpty: () => boolean;
}

const FormTextField: FC<IProps> = ({id, nameFormItem, required, question, changeFormInputContent, isEmpty}) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		changeFormInputContent(value);
	};

	return (
		<>
			<label>
				{nameFormItem}
				{required && <span>&nbsp;*</span>}
			</label>
			<input
				type="text"
				name={`question${id}`}
				placeholder={question}
				required={required}
				onChange={handleInputChange}
				onClick={()=> {
					console.log(id);
				}}
			/>
		</>
	);
};

export default FormTextField;
