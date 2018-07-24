import debug from "../lib/logger";
import { apiRoutes } from "../config";
import { setCookie, deleteCookie } from "../lib/cookie";
import { CLOCK_IN, CLOCK_OUT, GET_LOGS_SUCCESS } from "./CONSTANTS";
import store from "../store";

import { authorizedPost, authorizedGet } from "../lib/api";

export const clockIn = date => {
  setCookie("clockInTime", String(date));
  return {
    type: CLOCK_IN,
    date
  };
};

export const clockOut = () => {
  return async dispatch => {
    deleteCookie("clockInTime");

    const clockInTime = store.getState().timelog.clockInTime;
    const clockOutTime = new Date();

    const response = await authorizedPost(apiRoutes.clockTime, {
      clockInTime,
      clockOutTime
    }).catch(e => {
      debug("Something went wrong with saving the timelog..");
      debug("Clock-in Time: " + clockInTime);
      debug("Clock-out Time: " + clockOut);
      debug("Error:");
      debug(e);
    });

    const timelog = response.data.timelog;

    dispatch({ type: CLOCK_OUT, timelog });
  };
};

export const getLogs = () => {
  return async dispatch => {
    const { data } = await authorizedGet(apiRoutes.getLogs);
    dispatch({ type: GET_LOGS_SUCCESS, logs: data.logs });
  };
};
