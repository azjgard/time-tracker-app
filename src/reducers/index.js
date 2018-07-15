import {combineReducers} from 'redux';

// Reducers
import {userReducer} from './userReducer';
import {routerReducer} from '../router';

const reducers = {user: userReducer, router: routerReducer};

export const reducer = combineReducers(reducers);
export const initialState = Object.keys(reducers).reduce(
  (agg, key) =>
    Object.assign({}, agg, {
      [key]: {},
    }),
  {},
);
