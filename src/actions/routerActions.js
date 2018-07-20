import {push} from 'redux-little-router';

/**
 * Redirect the user to the specified href
 */
export const redirect = href => dispatch => {
  dispatch(push(href));
};
