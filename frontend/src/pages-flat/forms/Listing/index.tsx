import React from "react";
import {isEmpty} from "lodash";
import Link from "next/link";
import {FormCard} from "widgets/FormCard";
import {IForm} from "entites/Forms";
import {Section} from "ui/Section";
import {PrimaryButton} from "ui/Button";
import styles from "./styles.module.scss";

interface IProps {
	forms: IForm[]
}

export const ListingFormsPage = (props: IProps) => {
	const { forms } = props;

	if (isEmpty(forms)) {
		return (
			<>
				<Section margin={16}>
					<div className={styles.buttons}>
						<Link href='/forms/create'>
							<PrimaryButton>
								Создать
							</PrimaryButton>
						</Link>
					</div>
				</Section>
				<Section margin={16}>
					<div className={styles.emptyPage}>
						Формы отсутствуют. Создайте первую.
					</div>
				</Section>
			</>);
	}
	return (
		<>
			<Section margin={16}>
				<div className={styles.buttons}>
					<Link href='/forms/create'>
						<PrimaryButton>
							Создать
						</PrimaryButton>
					</Link>
				</div>
			</Section>
			<Section margin={16}>
				{forms.map((item) => (
					<FormCard form={item} key={item.id}/>
				))}
			</Section>
		</>
	);
};
