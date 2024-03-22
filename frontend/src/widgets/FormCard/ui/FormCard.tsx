import React from "react";
import {IForm} from "entites/Forms";
import Link from "next/link";
import {Text} from "ui/Text";
import style from "./styles.module.scss";
import ArrowIcon from "../../../lib/icons/ArrowIcon";

interface IProps {
	form: IForm
}

export const FormCard = (props: IProps) => {
	const {form} = props;
	return (
		<Link href={`/forms/edit/${form.id}`}>
			<div className={style.card}>
				<Text className={style.cardTitle}>
					{form.title}
				</Text>
				<div className={style.arrowBlock}>
					<ArrowIcon rotation={90} />
				</div>
			</div>
		</Link>
	);
};

