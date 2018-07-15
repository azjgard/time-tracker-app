import {combineReducers} from 'redux';
import {LOGIN_SUCCESS, LOGOUT} from '../actions/CONSTANTS';
import {routerReducer} from '../router';

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

const reducers = {user, router: routerReducer};

export const reducer = combineReducers(reducers);
export const initialState = Object.keys(reducers).reduce(
  (agg, key) =>
    Object.assign({}, agg, {
      [key]: {},
    }),
  {},
);
