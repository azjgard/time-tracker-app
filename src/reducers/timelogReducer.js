import { CLOCK_IN, CLOCK_OUT, REFRESH_TIMER } from "../actions/CONSTANTS";

const initialState = {
  clockInTime: null,
  logs: [],

  // if the user logs out and logs back in, the clockInTime won't be displayed
  // correctly because the TimerComponent relies on componentDidUpdate() to
  // be triggered to initialize the state properly. When logging in, we
  // "refresh the timer", which changes this property to a new date. This
  // property is mapped to the TimeLoggerComponent, which triggers a re-render
  // on the appropriate component.
  refresh: null
};

const timelogReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOCK_IN:
      return { ...state, clockInTime: action.date };
    case CLOCK_OUT:
      return { ...state, clockInTime: null };
    case REFRESH_TIMER:
      return { ...state, refresh: new Date() };
    default:
      return state;
  }
};

export default timelogReducer;
