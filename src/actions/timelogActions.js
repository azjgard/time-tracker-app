import axios from 'axios';
import {apiRoutes} from '../config';
import {setCookie} from '../lib/cookie';
import {CLOCK_IN, CLOCK_OUT} from './CONSTANTS';
import store from '../store';

import {authorizedPost} from '../lib/api';

export const clockIn = date => {
  setCookie('clockInTime', String(date));
  return {
    type: CLOCK_IN,
    date,
  };
};

export const clockOut = () => {
  return async dispatch => {
    setCookie('clockInTime', '', -1);

    const clockInTime = store.getState().timelog.clockInTime;
    const clockOutTime = new Date();

    console.log('clockInTime:');
    console.log(clockInTime);

    console.log('clockOutTime:');
    console.log(clockOutTime);

    await authorizedPost(apiRoutes.clockTime, {clockInTime, clockOutTime})
      .then(response => {
        console.log('response');
        console.log(response);
      })
      .catch(e => {
        console.log('error');
        console.log(e);
      });

    dispatch({type: CLOCK_OUT});
  };
};
