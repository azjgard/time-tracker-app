import {redirect} from '../actions/routerActions';
import {ROUTER_LOCATION_CHANGED} from '../actions/CONSTANTS';

import {logout} from '../actions/authActions';

import {
  loggedInOnlyPages,
  loggedOutOnlyPages,
  LOGGED_IN_REDIRECT,
  LOGGED_OUT_REDIRECT,
} from '../router';

export const redirectMiddleware = store => next => action => {
  let result = next(action);

  if (action.type === ROUTER_LOCATION_CHANGED) {
    const url = action.payload.pathname;
    const userLoggedIn = store.getState().user.isLoggedIn;

    if (userLoggedIn && loggedOutOnlyPages.includes(url))
      result = next(redirect(LOGGED_IN_REDIRECT));

    if (!userLoggedIn && loggedInOnlyPages.includes(url))
      result = next(redirect(LOGGED_OUT_REDIRECT));

    // BUG: can't access logout directly to logout, can only
    // be accomplished via a Link object..
    if (url === '/logout' && logout !== undefined) result = next(logout());
  }

  return result;
};
