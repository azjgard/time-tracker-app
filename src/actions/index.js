import {INCREMENT_COUNTER, DECREMENT_COUNTER} from './constants';

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrementCounter() {
  return {
    type: DECREMENT_COUNTER,
  };
}

export function loginAttempt() {
  console.log('do some cool stuff');
  return {
    type: 'LOGIN_ATTEMPT',
  };
}
