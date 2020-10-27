import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import { GlobalContext } from '../../context';
import getContacts from '../../context/actions/contacts/getContacts';

const ContactContainer = () => {
	const context = useContext(GlobalContext);
	const history = useHistory();

	useEffect(() => {
		getContacts(history);
	}, []);

	return (
		<>
			<Header />
			<h1>Contacts</h1>
		</>
	)
}

export default ContactContainer;