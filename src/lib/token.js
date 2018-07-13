import {postAPI} from './lib/api';
import {setCookie, getCookie} from './lib/cookie';

import {STORE_TOKEN} from './constants';

const BASE_URL = 'http://localhost:4000';
const LOGIN_URL = `${BASE_URL}/auth/login`;

const USER_TOKEN_COOKIE = 'user_token';
const USER_TOKEN_EXPIRATION_COOKIE = 'user_token_expiration';

// TODO: write tests for all of these functions

/**
 * Given a name and password, request a new token from the API
 *
 * @returns {string} user token for authenticating API requests
 * @returns {false} indicator that the token request failed
 */
export const getNewToken = (name, password) =>
  new Promise(resolve => {
    postAPI(LOGIN_URL, {name, password})
      .then(response => resolve(response.data.token))
      .catch(e => resolve(false));
  });

/**
 * Retrieves user token from cookie storage
 *
 * @returns {string} user token for authenticating API requests
 * @returns {false} indicator that there is no local token or it has expired
 */
export const getLocalToken = async () => {
  const localToken = await getCookie(USER_TOKEN_COOKIE);
  const localTokenExpiration = await getCookie(USER_TOKEN_EXPIRATION_COOKIE);

  if (localToken && new Date() < new Date(localTokenExpiration)) {
    return localToken;
  } else {
    return false;
  }
};

/**
 * Stores the given user token in cookie storage
 *
 * @returns {null}
 */
export const storeLocalToken = async token => {
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 23);

  setCookie(USER_TOKEN_COOKIE, token, 23);
  setCookie(USER_TOKEN_EXPIRATION_COOKIE, expiration.toString(), 23);
};

/**
 * Removes the user token stored in cookie storage
 *
 * @returns {null}
 */
export const deleteLocalToken = () => {
  setCookie(USER_TOKEN_COOKIE, '', -1);
  setCookie(USER_TOKEN_EXPIRATION_COOKIE, '', -1);
};

/**
 * Attempts to grab user token from local storage; if it doesn't exist
 * or it is expired, attempts to generate new user token from API.
 *
 * @param {string} name username
 * @param {string} password password
 * @returns {string} user token for authenticating with API
 * @returns {false} attempts to retrieve user token failed
 */
export const getToken = async (name, password) => {
  const token =
    (await getLocalToken()) || (await getNewToken(name, password)) || false;

  if ((await getLocalToken()) !== token) {
    storeLocalToken(token);
  }

  return token;
};
