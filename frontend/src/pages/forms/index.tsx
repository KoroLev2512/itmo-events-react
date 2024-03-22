import React from "react";
import {ListingFormsPage} from "pages-flat/forms/Listing";
import {useFormStore} from "entites/Forms";
import {useMountEffect} from "hooks/useMountEffect";
import {useIfUserRole} from "entites/User";
import {useRouter} from "next/router";

const ListingForms = () => {
	const [fetchForms, resetForm, forms] = useFormStore(state => [state.fetchForms, state.resetForm, state.forms]);
	const router = useRouter();
	const ifUser = useIfUserRole();

	useMountEffect(() => {
		if (!ifUser.isAdmin && !ifUser.isEventAdmin) {
			router.push("/");
		}
		fetchForms();
		return resetForm();
	});

	if (!ifUser.isAdmin && !ifUser.isEventAdmin) {
		return null;
	}

	return (
		<ListingFormsPage forms={forms}/>
	);
};

export default ListingForms;
