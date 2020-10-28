import { CONTACTS_LOADING, CONTACTS_LOAD_ERROR, CONTACTS_LOAD_SUCCESS } from "../../constants/actionTypes";
import contacts from '../../data/contacts.json';

const contactsReducer = (state, { payload, type }) => {
	switch (type) {
		case CONTACTS_LOADING:
			return {
				...state,
				contacts: {
					...state.contacts,
					isLoading: true
				}
			};
		case CONTACTS_LOAD_SUCCESS:
			return {
				...state,
				contacts: {
					...state.contacts,
					isLoading: false,
					data: contacts
				}
			};
		case CONTACTS_LOAD_ERROR:
			return {
				...state,
				contacts: {
					...state.contacts,
					isLoading: false,
					error: payload
				}
			}
		default:
			return state;
	}
}

export default contactsReducer;