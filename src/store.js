import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {DEBUG} from './config';

let middleware;

if (DEBUG) {
  middleware = applyMiddleware(thunk, logger);
} else {
  middleware = applyMiddleware(thunk);
}

const store = createStore(reducer, middleware);

export default store;
