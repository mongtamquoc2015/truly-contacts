import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axios';

export const login = (fields) => {
	return async (dispatch) => {
		dispatch({ type: LOGIN_LOADING });
		try {
			const loginResponse = await axiosInstance.post('/auth/login', fields);
			localStorage.token = loginResponse.data.token;
			dispatch({
				type: LOGIN_SUCCESS,
				payload: loginResponse.data
			});
		} catch (err) {
			dispatch({
				type: LOGIN_ERROR,
				payload: err.response ? err.response.data : "COULD NOT CONNECT"
			});
		}
	}
}