import React, { useContext } from 'react';
import Header from '../../components/Header';
import { GlobalContext } from '../../context';

const ContactContainer = () => {
	const context = useContext(GlobalContext);
	return (
		<>
			<Header />
			<h1>Contacts</h1>
		</>
	)
}

export default ContactContainer;