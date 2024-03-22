import React from "react";
import {useUserStore} from "entites/User";
import {isNull} from "lodash";
import {ProfileEditPage} from "pages-flat/profile/ProfileEdit";

const ProfilePage = () => {
	const [user, editUser] = useUserStore(state => [state.user, state.editUser]);

	if (isNull(user)) {
		return <div>loading...</div>;
	}
	return (
		<ProfileEditPage user={user} editUserAction={editUser}/>
	);
};

export default ProfilePage;
