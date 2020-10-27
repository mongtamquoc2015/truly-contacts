import { useContext, useState, useEffect } from 'react';
import { register } from '../../context/actions/auth/register';
import { GlobalContext } from '../../context';
import { useHistory } from 'react-router-dom';

const useForm = () => {
	const [fields, setFields] = useState({});
	const [fieldErrors, setFieldErrors] = useState({});

	const { authDispatch, authState: {
		auth: {
			isLoading,
			isError,
			data
		} }
	} = useContext(GlobalContext);

	const history = useHistory();

	useEffect(() => {
		if (data) {
			history.push('/auth/login');
		}
	}, [data]);

	useEffect(() => {
		if (isError) {
			for (const key in isError) {
				setFieldErrors({
					...fieldErrors,
					[key]: isError[key][0]
				});
			}
		}
	}, [isError]);

	console.log('isLoading', isLoading);
	console.log('isError', isError);
	console.log('errorType', typeof isError);
	console.log('data', data);
	console.log('fieldErrors', fieldErrors);

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

export default useForm;