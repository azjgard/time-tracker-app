import axios from "axios";
import store from "../store";

const genAuthHeaders = () => ({
  "x-access-token": store.getState().user.token
});

export const authorizedPost = (url, data) => {
  const options = {
    method: "POST",
    url,
    data,
    headers: genAuthHeaders(),
    json: true
  };

  return axios(options);
};

export const authorizedGet = url => {
  const options = {
    method: "GET",
    url,
    headers: genAuthHeaders(),
    json: true
  };

  return axios(options);
};
