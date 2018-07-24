import {
  CLOCK_IN,
  CLOCK_OUT,
  REFRESH_TIMER,
  GET_LOGS_SUCCESS
} from "../actions/CONSTANTS";

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
      console.log("clocking out...");
      console.log(action);
      return {
        ...state,
        clockInTime: null,
        logs: [...state.logs, action.timelog]
      };
    case REFRESH_TIMER:
      return { ...state, refresh: new Date() };
    case GET_LOGS_SUCCESS:
      return { ...state, logs: action.logs };
    default:
      return state;
  }
};

export default timelogReducer;
