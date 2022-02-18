import { createContext, useEffect, useReducer } from 'react';
import axios from '../config/axios';
import { clearToken, getToken, setToken } from '../services/localStorage';
import userReducer from '../reducers/user';

const UserContext = createContext();

const initialState = {};

const UserContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, initialState);
  const token = getToken();

  useEffect(() => {}, [token]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser: dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

export { UserContext };
