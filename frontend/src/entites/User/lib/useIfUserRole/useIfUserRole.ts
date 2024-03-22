import {ROLES} from "../../types/userState";
import {isEmpty, isNull} from "lodash";
import {useUserStore} from "../../model/slice/userStore";

export const useIfUserRole = () => {
	const user = useUserStore(state => state.user);
	if (isNull(user) || isEmpty(user.roles)) {
		return {
			isUser: false,
			isAdmin: false,
			isEventAdmin: false,
			isEventManager: false,
		};
	}

	return {
		isUser: user.roles.some(item => item.value === ROLES.USER) || false,
		isAdmin: user.roles.some(item => item.value === ROLES.ADMIN) || false,
		isEventAdmin: user.roles.some(item => item.value === ROLES.EVENTADMIN) || false,
		isEventManager: user.roles.some(item => item.value === ROLES.EVENTMANAGER) || false,
	};
};
