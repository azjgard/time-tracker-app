import {routerForBrowser} from 'redux-little-router';

const routes = {
  '/': {
    title: 'Hello world',
  },
  '/about': {
    title: 'stuff',
    payload: {
      test: 'here is some test dat',
    },
  },
};

export const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer,
} = routerForBrowser({
  routes,
});
