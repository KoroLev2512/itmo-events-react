import React from "react";
import UserIcon from "lib/icons/UserIcon";
import {PrimaryButton} from "ui/Button";
import {Checkbox} from "ui/Checkbox";
import {Input} from "ui/Input";
import {Section} from "ui/Section";
import {Text} from "ui/Text";
import {Form, Formik} from "formik";
import styles from "./ProfileEditPage.module.scss";
import FormCustomSelect from "feature/Form/ui/customSelect/FormCustomSelect";
import {FieldTypes} from "entites/Forms";
import {FormikDatePicker} from "feature/Form/ui/Datepicker/FormikDatePicker";
import {User} from "entites/User/types/userState";
// import Image from "next/image";

interface IProps {
	user: User;
	editUserAction: (data: User) => void;
}

export const ProfileEditPage = (props: IProps) => {
	const {user, editUserAction} = props;

	const onClickSubmitHandler = (data: User) => {
		editUserAction(data);
	};
	const prepareOnChange = (value: FieldTypes) => {
		console.log(value);
	};

	return (
		<>
			<Section margin={36}>
				<Text as={"h2"}>
					<UserIcon/> Профиль
				</Text>
			</Section>
			<Formik
				initialValues={user}
				onSubmit={onClickSubmitHandler}
			>
				{({values, handleChange}) => {
					const {
						given_name,
						middle_name,
						family_name,
						phone,
						birth_date,
						isu,
						vk,
						tg
					} = values;
					return (
						<Form>
							<Section className={styles.content} margin={0}>
								<div className={styles.form}>
									{/*<div className={styles.photoSection}>*/}
									{/*	<Image*/}
									{/*		className={styles.profilePic} alt="Profile image"*/}
									{/*		src={user?.picture || "/thumbnail/user.jpg"}*/}
									{/*		width={300} height={300}*/}
									{/*		// fill*/}
									{/*	/>*/}
									{/*	<div>изменить фото</div>*/}
									{/*</div>*/}
									<div className={styles.fieldsSection}>
										<div className={styles.fields}>
											<div className={styles.columns}>
												<div className={styles.column}>
													<Input label="Имя" className={styles.input} disabled>
														{given_name}
													</Input>
													<Input label="Фамилия" className={styles.input} disabled>
														{family_name}
													</Input>
													<Input label="Отчество" className={styles.input} disabled>
														{middle_name}
													</Input>
													<Input
														label="Номер телефона"
														className={styles.input}
														onChange={handleChange}
														id="phone"
														name="phone"
													>
														{phone}
													</Input>
												</div>
												<div className={styles.column}>
													<div style={{display: "flex", gap: "30px" }}>
														<FormikDatePicker
															label="Дата рождения"
															name="birth_date"
															withTime={false}
															additionalClassName="profile"
														/>
														<Input label="Номер ИСУ" className={styles.input} disabled>
															{String(isu)}
														</Input>
													</div>
													<FormCustomSelect
														name={"citizenship"}
														options={{"RF": "РФ", "foreign": "Иностранное"}}
														value={""}
														prepareOnChange={prepareOnChange} />
													{/*<Input label="Гражданство" className={styles.input} disabled>*/}
													{/*	Сделать выпадающий список*/}
													{/*	/!*	{is_student ? "РФ" : "Иностранное"}*!/*/}
													{/*</Input>*/}
												</div>
											</div>
											<div className={styles.contacts}>
												<Input
													label="Адрес регистрации"
													className={styles.input}
													onChange={handleChange}
													id="address"
													name="address"
												>
													Сделать адрес
												</Input>

												<Input
													label="Ссылка на страницу в VK"
													className={styles.input}
													onChange={handleChange}
													id="vk"
													name="vk"
												>
													{vk}
												</Input>
												<Input
													label="Ссылка на профиль TG"
													className={styles.input}
													onChange={handleChange}
													id="tg"
													name="tg"
												>
													{tg}
												</Input>
											</div>

										</div>
										<div className={styles.agreeLabel}>
											<Checkbox defaultStatus={true} disabled>
												Согласен на обработку персональных данных
											</Checkbox>
										</div>
										<div className={styles.actions}>
											<PrimaryButton type="submit">Сохранить</PrimaryButton>
										</div>
									</div>
								</div>
							</Section>
						</Form>

					);
				}}
			</Formik>
		</>
	);
};
