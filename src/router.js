import {routerForBrowser} from 'redux-little-router';

const routes = {};

export const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer,
} = routerForBrowser({
  routes,
});

export const urlsToActions = {};

export const loggedInOnlyPages = ['/dashboard', '/logout'];
export const loggedOutOnlyPages = ['/', '/login'];

export const LOGGED_IN_REDIRECT = '/dashboard';
export const LOGGED_OUT_REDIRECT = '/login';
