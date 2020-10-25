import React from 'react'
import { Link } from 'react-router-dom';
import { Header } from '../../components';

const LoginContainer = () => {
	return (
		<div>
			<Header />
			<h1>Login</h1>
			<Link to="/auth/register">Register</Link>
		</div>
	)
}

export default LoginContainer;
