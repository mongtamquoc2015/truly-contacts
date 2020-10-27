import { useContext, useState, useEffect } from 'react';
import { register } from '../../context/actions/auth/register';
import { GlobalContext } from '../../context';
import { useHistory } from 'react-router-dom';

const useRegisterForm = () => {
	const [fields, setFields] = useState({});
	const [fieldErrors, setFieldErrors] = useState({});

	const { authDispatch, authState: {
		auth: {
			isLoading,
			error,
			data
		} }
	} = useContext(GlobalContext);

	const history = useHistory();

	useEffect(() => {
		if (data) {
			history.push('/auth/login');
		}
	}, [history, data]);

	useEffect(() => {
		if (error) {
			for (const key in error) {
				setFieldErrors({
					...fieldErrors,
					[key]: error[key][0]
				});
			}
		}
	}, [error, fieldErrors]);

	const onChange = (e, { name, value }) => {
		setFields({ ...fields, [name]: value });
	}

	const isValid = (
		!fields.username?.length ||
		!fields.firstName?.length ||
		!fields.lastName?.length ||
		!fields.email?.length ||
		!fields.password?.length
	);

	const onSubmit = () => {
		setFieldErrors({});
		register(fields)(authDispatch);
	}

	return { fields, isValid, isLoading, fieldErrors, onSubmit, onChange };
}

export default useRegisterForm