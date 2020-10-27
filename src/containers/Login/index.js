import React from 'react';
import LoginUI from '../../layout/Login';
import useLoginForm from './useLoginForm';

const LoginContainer = () => {
	return <LoginUI {...useLoginForm()} />
}

export default LoginContainer;