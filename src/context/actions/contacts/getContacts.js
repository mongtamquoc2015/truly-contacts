import axiosInstance from "../../../helpers/axiosInstance"

const getContacts = (history) => {
	axiosInstance(history)
		.get('/contacts/')
		.then(res => console.log('res.data', res))
		.catch(err => console.log('err', err))
}

export default getContacts;