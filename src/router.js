import {routerForBrowser} from 'redux-little-router';

const routes = {};

export const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer,
} = routerForBrowser({
  routes,
});
