import React, { useEffect } from 'react';
import RegisterUI from '../../layout/Register';
import useRegisterForm from './useRegisterForm';

const RegisterContainer = () => {
	useEffect(() => {

	}, []);

	return <RegisterUI {...useRegisterForm()} />
}

export default RegisterContainer;