import {combineReducers} from 'redux';

import constants from '../actions/constants';

const clients = (clients = [], action) => {
  switch (action.type) {
    case 'UPDATE_CLIENTS':
      return action.clients;
    default:
      return clients;
  }
};

const auth = (auth = {}, action) => {
  switch (action.type) {
    case 'STORE_TOKEN':
      return {...auth, token: action.token, expiration: action.expiration};
    default:
      return auth;
  }
};

const count = (count = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return count + 1;
    case 'DECREMENT_COUNTER':
      return count - 1;
    default:
      return count;
  }
};

const reducer = combineReducers({count, clients, auth});

export default reducer;
