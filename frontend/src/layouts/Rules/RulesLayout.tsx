import React from "react";
import { Section } from "../../ui/Section";
import { Text } from "../../ui/Text";
import styles from "./rules.styles.module.scss";

const rules = [
	[
		{
			title: "Информация о сервисе",
			text: "С помощью платформы ITMO.EVENTS вы можете подать заявку на мероприятия в рамках проектов “Спорт-Осень” и других мероприятий от ITMO.STUDENTS."
		},
		{
			title: "Быстрая авторизация",
			text: "Наш сервис не требует долгой регистрации, так как связан с ITMO.ID, и вам будет достаточно просто авторизоваться."
		},
	],
	[
		{
			title: "Равные шансы участвовать в мероприятии",
			text: "На платформе ITMO.EVENTS действует система коэффициентов: после успешного попадания на мероприятие пользователю добавляется коэффициент, который увеличивает шансы на успешный отбор для других участников на следующие мероприятия."
		},
		{
			title: "Отказы от участия",
			text: "Если пользователь, который попал в списки, отказался от участия, то его шанс попасть на мероприятие в следующий раз будет ниже. В случае наличия уважительной причины этого можно избежать, написав в сообщения группы ITMO.STUDENTS в социальной сети ВКонтакте."
		},
	],
	[
		{
			title: "Системы банов",
			text: "В случае порчи имущества и нанесения иного ущерба, а также других грубых нарушений кодекса этики ИТМО и законов РФ, пользователь может папасть в бан. Это ограничит доступ к мероприятиям платформы."
		}
	],
];

export const RulesLayout = () => {
	return (
		<>
			<Section margin={16}>
				<Text as="h1">Правила</Text>
			</Section>
			{rules.map((item) => (
				<div key={item[0].title} className={styles.wrapper}>
					{item.map(rule => (
						<div key={rule.title} className={styles.list}>
							<Section margin={14}>
								<Text as="h2" className={styles.item}>
									{rule.title}
								</Text>
							</Section>
							<Text className={styles.requestsList}>
								{rule.text}
							</Text>
						</div>
					))}
				</div>
			))}
		</>
	);
};
