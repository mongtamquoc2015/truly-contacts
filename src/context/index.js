import React, { createContext, useReducer } from 'react';
import { authInitialState, contactsInitialState } from './initialstates';
import { authReducer, contactsReducer } from './reducers';

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, authInitialState);
	const [contactsState, contactsDispatch] = useReducer(contactsReducer, contactsInitialState);
	return (
		<GlobalContext.Provider value={
			{
				authState,
				contactsState,
				authDispatch,
				contactsDispatch
			}
		}>
			{children}
		</GlobalContext.Provider>
	)
}

export { GlobalProvider, GlobalContext };