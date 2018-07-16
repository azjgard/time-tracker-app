import {getToken, deleteLocalToken} from '../lib/token';

import {LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from './CONSTANTS';
import {LOGGED_IN_REDIRECT, LOGGED_OUT_REDIRECT} from '../router';

import store from '../store';
import {redirect} from './routerActions';

/**
 * Logs in the user. Calling the function with just a loginData object will
 * either use an unexpired token stored in a local cookie or will attempt to
 * generate a new token via the API. However, if a token is explicitly passed
 * into the function via the second argument, then that will be used instead.
 *
 * loginData {object} { "Username/Email" : "string", "Password" : "string" }
 * token {string} [optional]
 *
 * @returns {blank}
 */
export const login = (loginData, token = false) => {
  return async dispatch => {
    dispatch({type: LOGIN_ATTEMPT});

    if (!token) {
      token = await getToken(
        loginData['Username/Email'],
        loginData['Password'],
      );
    }

    if (token) {
      dispatch({type: LOGIN_SUCCESS, token});

      if (
        store.getState().router.pathname === '/' ||
        store.getState().router.pathname === '/login'
      ) {
        dispatch(redirect(LOGGED_IN_REDIRECT));
      }
    } else {
      dispatch({type: LOGIN_FAILURE});
    }
  };
};

/**
 * Logs out the user, removes their token from cookie storage,
 * and redirects the user to login page.
 */
export const logout = () => {
  return dispatch => {
    deleteLocalToken();
    dispatch({type: LOGOUT});
    dispatch(redirect(LOGGED_OUT_REDIRECT));
  };
};
