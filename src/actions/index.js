import debug from '../lib/logger';

export function incrementCounter() {
  debug('hello', 'wordl');
  return {
    type: 'INCREMENT_COUNTER',
  };
}

export function decrementCounter() {
  return {
    type: 'DECREMENT_COUNTER',
  };
}
