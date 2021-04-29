import React from 'react';

import { createContext, useReducer } from 'react';
import { appReducer } from '../reducers/appReducer';
import { actions } from '../actions/appActions';

export const AppContext = createContext();

const initialState = {
  isAuthenticated: false,
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = {
    isAuthenticated: state.isAuthenticated,
    setAuthenticated: (value) => {
      dispatch({ type: actions.SET_AUTHENTICATED, value });
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
