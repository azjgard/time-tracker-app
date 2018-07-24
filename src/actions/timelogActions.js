import axios from "axios";
import debug from "../lib/logger";
import { apiRoutes } from "../config";
import { setCookie, deleteCookie } from "../lib/cookie";
import { CLOCK_IN, CLOCK_OUT } from "./CONSTANTS";
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

    await authorizedPost(apiRoutes.clockTime, {
      clockInTime,
      clockOutTime
    }).catch(e => {
      debug("Something went wrong with saving the timelog..");
      debug("Clock-in Time: " + clockInTime);
      debug("Clock-out Time: " + clockOut);
      debug("Error:");
      debug(e);
    });

    dispatch({ type: CLOCK_OUT });
  };
};

export const getLogs = () => {
  return async dispatch => {
    const logs = await authorizedGet(apiRoutes.getLogs);
    console.log(logs);
    // dispatch an action with the logs that we grab from the api
  };
};
