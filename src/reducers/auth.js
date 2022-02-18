import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  AUTH_SUCCESS,
  LOADING,
  AUTH_FAIL,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGOUT,
} from '../config/data';

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case AUTH_SUCCESS: {
      console.log('AuthReducer =====>', action.payload);
      return { ...state, isAuthenticated: true };
    }
    case LOADING: {
      return state;
    }
    case AUTH_FAIL: {
      return state;
    }
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT: {
      return state;
    }
    default: {
      return state;
    }
  }
};
export default authReducer;
