import {DEBUG} from '../config';

function debugLog() {
  if (DEBUG) {
    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  }
}

export default debugLog;
