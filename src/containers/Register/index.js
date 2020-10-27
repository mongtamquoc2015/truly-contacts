import React, { useEffect } from 'react';
import RegisterUI from '../../layout/Register';
import useForm from './useForm';

const RegisterContainer = () => {
	useEffect(() => {

	}, []);

	return <RegisterUI {...useForm()} />
}

export default RegisterContainer;