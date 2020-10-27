import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export const register = (fields) => {
	return dispatch => {
		dispatch({ type: REGISTER_LOADING });
		axiosInstance()
			.post('/auth/register', {
				...fields,
				last_name: fields.lastName,
				first_name: fields.firstName
			})
			.then(res => {
				dispatch({
					type: REGISTER_SUCCESS,
					payload: res.data
				});
			})
			.catch((err) => {
				dispatch({
					type: REGISTER_ERROR,
					payload: err.response ? err.response.data : "COULD NOT CONNECT"
				});
			});
	}
}
