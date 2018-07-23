import {combineReducers} from 'redux';

import navReducer from './navReducer';
import {userReducer} from './userReducer';
import {routerReducer} from '../router';
import timelogReducer from './timelogReducer';
import projectReducer from './projectReducer';

const reducers = {
  nav: navReducer,
  user: userReducer,
  router: routerReducer,
  timelog: timelogReducer,
  projects: projectReducer,
};

export const reducer = combineReducers(reducers);
