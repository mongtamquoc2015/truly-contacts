import {
	REGISTER_ERROR, REGISTER_LOADING,
	REGISTER_SUCCESS, LOGIN_ERROR,
	LOGIN_LOADING, LOGIN_SUCCESS
} from "../../constants/actionTypes";

const authReducer = (state, { payload, type }) => {
	switch (type) {
		case REGISTER_LOADING:
			return {
				...state,
				auth: {
					...state.auth,
					isLoading: true
				}
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				auth: {
					...state.auth,
					isLoading: false,
					data: payload
				}
			};
		case REGISTER_ERROR:
			return {
				...state,
				auth: {
					...state.auth,
					isLoading: false,
					error: payload
				}
			};
		case LOGIN_LOADING:
			return {
				...state,
				auth: {
					...state.auth,
					isLoading: true
				}
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				auth: {
					...state.auth,
					isLoading: false,
					data: payload
				}
			};
		case LOGIN_ERROR:
			return {
				...state,
				auth: {
					...state.auth,
					isLoading: false,
					error: payload
				}
			};
		default:
			return state;
	}
}

export default authReducer;