import React from "react";
import {IUserAnswer} from "./types";
import UserAnswer from "./UserAnswer";

const AnswersPage = () => {
	const answersArray: IUserAnswer[] = [
		{
			name: "Alex",
			status: "none",
			answers: {
				"question1": "answer1",
				"question2": ["answer2.1", "answer2.2"],
				"question3": ["answer3.1", "answer3.2"],
				"question4": "answer4",
			}
		},
		{
			name: "Ne Alex",
			status: "none",
			answers: {
				"question1": "answer1",
				"question2": ["answer2.1", "answer2.2"],
				"question3": ["answer3.1", "answer3.2"],
				"question4": "answer4",

			}
		}
	];
	//TODO Сделать функционал кнопок "одобрен", "отклонен", "волонтёр" на пользователя, делать список и отправлять данные на бэк по кнопке
	//TODO Чтоб не сбрасывалось использовать localStorage, сделать надпись "есть изменения" (которые ещё не отправлены на бэк)
	return (
		<div>
			<div>{`${answersArray.length} ответов`}</div>
			<div>
				{
					answersArray.map((userAnswer, index) => {
						return (
							<UserAnswer key={index} userAnswer={userAnswer} initialStatus={answersArray[index].status}/>
						);
					})
				}
			</div>
		</div>
	);
};

export default AnswersPage;
