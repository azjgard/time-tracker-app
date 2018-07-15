import {combineReducers} from 'redux';
import {LOGIN_SUCCESS, LOGOUT} from '../actions/CONSTANTS';

const user = (user = {}, action) => {
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

const reducer = combineReducers({user});

export default reducer;
