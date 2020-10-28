import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../context';
import getContacts from '../../context/actions/contacts/getContacts';
import ContactsListUI from '../../layout/Contacts/List';

const ContactContainer = () => {
	const { contactsDispatch, contactsState } = useContext(GlobalContext);
	const history = useHistory();

	console.log('contactsState', contactsState.contacts);

	useEffect(() => {
		getContacts(history)(contactsDispatch);
	}, []);

	return <ContactsListUI {...contactsState.contacts} />
}

export default ContactContainer;