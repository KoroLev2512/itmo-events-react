import {useEventsStore} from "entites/Events";
import {EventForm} from "pages-flat/events/EventForm";
import {useRouter} from "next/router";
import {useIfUserRole} from "entites/User";
import {useMountEffect} from "hooks/useMountEffect";

const CreateEventPage = () => {
	const [createEvent] = useEventsStore(state => [state.createEvent]);

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

	return (
		<EventForm action={createEvent}/>
	);
};

export default CreateEventPage;
