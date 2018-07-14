import {getToken, deleteLocalToken} from '../lib/token';

import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './actionCreatorConstants';

export const login = loginData => {
  return async dispatch => {
    dispatch({type: LOGIN_ATTEMPT});

    const token = await getToken(
      loginData['Username/Email'],
      loginData['Password'],
    );

    if (token) {
      dispatch({type: LOGIN_SUCCESS, token});
    } else {
      dispatch({type: LOGIN_FAILURE});
    }
  };
};

export const logout = () => {
  deleteLocalToken();
  return {
    type: LOGOUT,
  };
};
