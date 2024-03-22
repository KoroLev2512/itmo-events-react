import React, {useState} from "react";
import {map as lMap} from "lodash";
import {IUserAnswer} from "./types";

interface IProps {
	userAnswer: IUserAnswer;
	initialStatus: string;
}
const UserAnswer: React.FC<IProps> = ({userAnswer, initialStatus}) => {
	const statusDictionary: Record<string, string> = {
		"none": "Не распределён",
		"approved": "Подтверждён",
		"rejected": "Отклонён",
		"volunteer": "Волонтёр"
	};
	const [status, setStatus] = useState(initialStatus);
	const [answersState, setAnswerState] = useState("none");
	const onChangeStatus = (stat:string) => {
		setStatus(stat);
	};
	const onChangeAnswerState = () => {
		answersState === "none" ?
			setAnswerState("flex") :
			setAnswerState("none");

	};
	console.log(initialStatus, "status");
	return (
		<div>
			<div style={{backgroundColor: "#eee"}}>
				<div style={{fontWeight:"700", marginTop:"20px"}}>{userAnswer.name}</div>
				<div>
					<div>{`Статус: ${statusDictionary[status]}`}</div>
					<div onClick={() =>onChangeStatus("approved")}>Одобрить</div>
					<div onClick={() =>onChangeStatus("rejected")}>Отклонить</div>
					<div onClick={() =>onChangeStatus("volunteer")}>Волонтёр</div>
				</div>
				<div onClick={onChangeAnswerState}>Открыть ответы</div>
			</div>
			{
				lMap(userAnswer.answers, (answer, question) => {
					return <div style={{display: answersState,marginTop: "10px"}}>
						<div style={{marginRight: "5px"}}>{`${question}`}</div>
						{
							typeof answer === "string" ?
								<div>{`${answer}`}</div> :
								<div>
									{answer.map((ans, ansIndex) => (
										<div key={ansIndex}>{ans}</div>
									)) }
								</div>
						}
					</div>;
				})
			}
		</div>
	);
};

export default UserAnswer;
