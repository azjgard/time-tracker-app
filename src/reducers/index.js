import {combineReducers} from 'redux';

const clients = (clients = [], action) => {
  switch (action.type) {
    case 'UPDATE_CLIENTS':
      return action.clients;
    default:
      return clients;
  }
};

const user = (user = {}, action) => {
  switch (action.type) {
    case 'STORE_TOKEN':
      return {...user, token: action.token};
    default:
      return user;
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

const reducer = combineReducers({count, clients, user});

export default reducer;
