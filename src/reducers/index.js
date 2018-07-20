import {combineReducers} from 'redux';

import navReducer from './navReducer';
import {userReducer} from './userReducer';
import {routerReducer} from '../router';
import projectReducer from './projectReducer';

const reducers = {
  nav: navReducer,
  user: userReducer,
  router: routerReducer,
  projects: projectReducer,
};

export const reducer = combineReducers(reducers);
