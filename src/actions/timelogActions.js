import {setCookie} from '../lib/cookie';
import {CLOCK_IN, CLOCK_OUT} from './CONSTANTS';

export const clockIn = date => {
  setCookie('clockInTime', String(date));
  return {
    type: CLOCK_IN,
    date,
  };
};

export const clockOut = () => {
  setCookie('clockInTime', '', -1);

  // hit the API to register the time

  return {
    type: CLOCK_OUT,
  };
};
