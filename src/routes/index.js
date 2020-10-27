import {
	ContactsContainer, CreateContactContaienr, LoginContainer, RegisterContainer
} from '../containers';
import { v4 as uuidv4 } from 'uuid';

const routes = [
	{
		id: uuidv4(),
		path: '/auth/register',
		component: RegisterContainer,
		title: 'Register',
		isNeedsAuth: false
	},
	{
		id: uuidv4(),
		path: '/auth/login',
		component: LoginContainer,
		title: 'Login',
		isNeedsAuth: false
	},
	{
		id: uuidv4(),
		path: '/',
		component: ContactsContainer,
		title: 'Contacts',
		isNeedsAuth: true
	},
	{
		id: uuidv4(),
		path: '/contacts/create',
		component: CreateContactContaienr,
		title: 'Create Contact',
		isNeedsAuth: true
	}
];

export default routes;