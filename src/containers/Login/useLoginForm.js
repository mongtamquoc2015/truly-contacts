import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../context';
import { login } from '../../context/actions/auth/login';

const useLoginForm = () => {
	const [fields, setFields] = useState({});

	const history = useHistory();

	const { authDispatch, authState: {
		auth: {
			isLoading,
			data,
			error
		} }
	} = useContext(GlobalContext);

	useEffect(() => {
		if (data?.user) {
			history.push('/');
		}
	}, [data, history]);

	console.log('data', data);
	console.log('error', error.detail);

	const onChange = (e, { name, value }) => {
		setFields({ ...fields, [name]: value });
	}

	const isValid = (
		!fields.username?.length ||
		!fields.password?.length
	);

	const onSubmit = () => {
		login(fields)(authDispatch);
	}

	return { fields, isValid, isLoading, error, onSubmit, onChange };
}

export default useLoginForm;