import {CLOCK_IN, CLOCK_OUT} from '../actions/CONSTANTS';

const initialState = {
  clockInTime: null,
};

const timelogReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOCK_IN:
      return {...state, clockInTime: action.date};
    case CLOCK_OUT:
      return {...state, clockInTime: null};
    default:
      return state;
  }
};

export default timelogReducer;
