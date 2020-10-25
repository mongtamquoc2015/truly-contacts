import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../../context/actions/register';
import { Header } from '../../components';

const RegisterContainer = () => {
	useEffect(() => {
		register();
	}, []);

	return (
		<div>
			<Header />
			<h1>Register</h1>
			<Link to="/auth/login">Login</Link>
		</div>
	)
}

export default RegisterContainer
