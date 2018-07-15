import {routerForBrowser} from 'redux-little-router';

const routes = {
  '/': {
    title: 'Hello world',
  },
};

export const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer,
} = routerForBrowser({
  routes,
});
