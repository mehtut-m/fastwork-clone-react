import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  AUTH_SUCCESS,
  LOADING,
  LOGOUT,
} from '../config/data';

const userReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case AUTH_SUCCESS: {
      console.log('state ------>', state);
      console.log(action.payload);
      return { ...state, ...action.payload };
    }
    case LOADING: {
      return state;
    }
    case LOGOUT: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
