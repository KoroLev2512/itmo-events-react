import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {isNull} from "lodash";
import {FillForm} from "pages-flat/forms/FillForm";
import {useFillFormStore} from "entites/FillForm";

// TODO refactor form[0] to form when api will give form as object

const FillFormPage = () => {
	const {query} = useRouter();
	const [form, loadEventForm, resetForm, registration] = useFillFormStore(state => [state.form, state.loadEventForm, state.resetForm, state.registration]);

	useEffect(() => {
		if (query.eventId) {
			loadEventForm(query.eventId as string);
		}
		return resetForm();
	}, [loadEventForm, query.eventId, resetForm]);

	const onSubmitForm = (data: Record<number, string>) => {
		console.log(data);
		const preparedValues = {
			eventId: query.eventId as string,
			reg: form[0]?.fields.map(item => data[item.fieldId] || "") || []
		};
		registration(preparedValues);
	};

	if (isNull(form)) {
		return null;
	}

	return <FillForm form={form[0]} onSubmit={onSubmitForm}/>;
};

export default FillFormPage;
