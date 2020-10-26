import { useState } from 'react';

const useForm = () => {
	const [form, setForm] = useState({});

	const onChange = (e, { name, value }) => {
		setForm({ ...form, [name]: value });
	}

	const registerFormValid = (
		!form.username?.length ||
		!form.firstName?.length ||
		!form.lastName?.length ||
		!form.email?.length ||
		!form.password?.length
	);

	return { form, onChange, registerFormValid };
}

export default useForm;