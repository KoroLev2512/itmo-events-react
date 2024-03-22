import React from "react";
import {CreateForm} from "pages-flat/forms/CreateForm";
import {useRouter} from "next/router";
import {useIfUserRole} from "entites/User";
import {useMountEffect} from "hooks/useMountEffect";

const EditFormPage = () => {
	const router = useRouter();
	const ifUser = useIfUserRole();

	useMountEffect(() => {
		if (!ifUser.isAdmin && !ifUser.isEventAdmin) {
			router.push("/");
		}
	});

	if (!ifUser.isAdmin && !ifUser.isEventAdmin) {
		return null;
	}

	return <CreateForm mode="edit"/>;
};

export default EditFormPage;
