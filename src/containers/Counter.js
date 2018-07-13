import React from 'react';
import {connect} from 'react-redux';

import {incrementCounter, decrementCounter} from '../actions';

const CounterComponent = ({count, increment, decrement}) => (
  <div>
    <span id="counter">{count}</span>
    <button onClick={increment}>+</button>{' '}
    <button onClick={decrement}>-</button>
  </div>
);

const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter()),
  };
};

const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

export default Counter;
