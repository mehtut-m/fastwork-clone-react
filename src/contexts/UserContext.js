import { createContext, useEffect, useReducer } from 'react';
import axios from '../config/axios';
import { clearToken, getToken, setToken } from '../services/localStorage';
import userReducer from '../reducers/user';

const UserContext = createContext();

const initialState = {};

const UserContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const token = getToken();
    if (token) {
      axios
        .get('/user/me')
        .then((res) => {
          if (res.status === 200) {
            dispatch({
              type: 'LOGIN_SUCCESS',
              payload: res.data.user,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

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
