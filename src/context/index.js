import React, { createContext, useReducer } from 'react';
import { authInitialState, contactsInitialState } from './initialstates';
import { auth, contacts } from './reducers';

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
	const [authState, authDispatch] = useReducer(auth, authInitialState);
	const [contactsState, contactsDispatch] = useReducer(contacts, contactsInitialState);
	return (
		<GlobalContext.Provider value={
			{
				authState,
				authDispatch,
				contactsState,
				contactsDispatch
			}
		}>
			{children}
		</GlobalContext.Provider>
	)
}

export { GlobalProvider, GlobalContext };