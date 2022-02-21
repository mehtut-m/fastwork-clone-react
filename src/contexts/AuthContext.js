import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import authReducer from '../reducers/auth';
import { register as callApiRegister } from '../apis/auth';
import { signInGoogle } from '../apis/auth';
import { REGISTER_SUCCESS, LOGOUT, LOGIN_SUCCESS } from '../config/data';
import { setToken, clearToken, getToken } from '../services/localStorage';
import { UserContext } from './UserContext';

const AuthContext = createContext();

const intialState = {
  token: getToken(),
  isAuthenticated: null,
};

const AuthContextProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, intialState);
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const login = () => {}; // make a login request

  // register the user
  const register = async (formInput) => {
    const res = await callApiRegister(formInput);
    console.log(res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  };

  const logOut = () => {
    clearToken();
    dispatch({
      type: LOGOUT,
      payload: {},
    });
    setUser({
      type: LOGOUT,
      payload: {},
    });
    navigate('/', { replace: true });
  };

  const googleLogin = async (response) => {
    try {
      const { tokenId } = response;
      const res = await signInGoogle(tokenId);
      console.log('from backend res => ', res);
      if (res.status === 200) {
        setToken(res.data.token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });

        setUser({
          type: LOGIN_SUCCESS,
          payload: res.data.user,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        googleLogin,
        register,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export { AuthContext };
