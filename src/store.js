import {initializeCurrentLocation} from 'redux-little-router';
import {compose, createStore, applyMiddleware} from 'redux';
import {routerMiddleware, routerEnhancer} from './router';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {redirectMiddleware} from './middleware/redirectMiddleware';

import {DEBUG} from './config';

import {reducer} from './reducers';

let middleware;

if (DEBUG) {
  middleware = applyMiddleware(
    routerMiddleware,
    redirectMiddleware,
    logger,
    thunk,
  );
} else {
  middleware = applyMiddleware(routerMiddleware, redirectMiddleware, thunk);
}

const store = createStore(reducer, compose(routerEnhancer, middleware));

const initialLocation = store.getState().router;
if (initialLocation) {
  console.log('DISPATCHING INITIAL LOCATION');
  store.dispatch(initializeCurrentLocation(initialLocation));
}

export default store;
