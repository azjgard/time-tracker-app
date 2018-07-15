import {combineReducers} from 'redux';

import {LOGIN_SUCCESS, LOGOUT} from '../actions/CONSTANTS';

// Reducers
import {userReducer} from './userReducer';
import {routerReducer} from '../router';

const sharedLinks = [
  {
    type: 'yes',
    href: '/',
    text: 'Home',
  },
];
const loggedOutLinks = [
  {
    href: '/login',
    text: 'Login',
  },
];
const loggedInLinks = [
  {
    href: '/logout',
    text: 'Logout',
  },
];

// EXPORT TO NEW FILE
const navReducer = (navLinks = [...sharedLinks, ...loggedOutLinks], action) => {
  switch (action.type) {
    case LOGOUT:
      return [...sharedLinks, ...loggedOutLinks];
    case LOGIN_SUCCESS:
      return [...sharedLinks, ...loggedInLinks];
    default:
      return navLinks;
  }
};
// EXPORT TO NEW FILE

const reducers = {user: userReducer, router: routerReducer, nav: navReducer};

export const reducer = combineReducers(reducers);
export const initialState = Object.keys(reducers).reduce(
  (agg, key) =>
    Object.assign({}, agg, {
      [key]: {},
    }),
  {},
);
