import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  AUTH_SUCCESS,
  LOADING,
  LOGOUT,
} from '../config/data';

const userReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case AUTH_SUCCESS: {
      return { ...state, ...action.payload };
    }
    case LOGOUT: {
      return {};
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
