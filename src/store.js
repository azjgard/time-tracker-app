import {compose, createStore, applyMiddleware} from 'redux';
import {reducer} from './reducers';
import {initializeCurrentLocation} from 'redux-little-router';

import {routerMiddleware, routerEnhancer} from './router';

// Middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Env Variables
import {DEBUG} from './config';

let middleware;

if (DEBUG) {
  middleware = applyMiddleware(thunk, logger, routerMiddleware);
} else {
  middleware = applyMiddleware(thunk, routerMiddleware);
}

const store = createStore(reducer, compose(routerEnhancer, middleware));

const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}

export default store;
