export type IQuestionAnswer = string | string[]; 
export interface IUserAnswer {
	name: string;
	status: string;
	answers: Record<string, IQuestionAnswer>
}