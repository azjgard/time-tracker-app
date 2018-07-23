import axios from 'axios';
import store from '../store';

export const authorizedPost = (url, data) => {
  const options = {
    method: 'POST',
    url,
    data,
    headers: {
      'x-access-token': store.getState().user.token,
    },
    json: true,
  };

  return axios(options);
};
