import axios from 'axios';

const axiosInstance = (history = null) => {
	const baseURL = process.env.REACT_APP_API_URL;

	let headers = {};

	if (localStorage.token) {
		headers.Authorization = `Bearer ${localStorage.token}`;
	}

	const instance = axios.create({
		baseURL: baseURL,
		headers
	});

	instance.interceptors.response.use(
		res => (
			new Promise((resolve, reject) => {
				resolve(res);
			})
		),
		err => {
			if (!err.response) {
				return new Promise((resolve, reject) => {
					reject(err);
				});
			}
			if (err.response.status === 403) {
				localStorage.removeItem('token');
				if (history) {
					history.push('/auth/login')
				} else {
					window.location('/auth/login');
				}
			} else {
				return new Promise((resolve, reject) => {
					reject(err);
				});
			}
		});
	return instance;
};

export default axiosInstance;