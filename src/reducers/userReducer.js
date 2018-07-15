import {LOGIN_SUCCESS, LOGOUT} from '../actions/CONSTANTS';

export const userReducer = (user = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...user,
        isLoggedIn: true,
        token: action.token,
      };
    case LOGOUT:
      return {
        ...user,
        isLoggedIn: false,
        token: null,
      };
    default:
      return user;
  }
};
