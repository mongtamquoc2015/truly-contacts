import React, { useEffect } from 'react';
import { register } from '../../context/actions/register';
import RegisterUI from '../../layout/Register';
import useForm from './userForm';

const RegisterContainer = () => {
	useEffect(() => {
		register();
	}, []);

	return <RegisterUI {...useForm()} />
}

export default RegisterContainer;