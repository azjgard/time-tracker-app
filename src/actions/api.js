import axios from 'axios';

const getAPI = url => axios.get(url);
const postAPI = (url, data) => axios.post(url, data);

const BASE_URL = 'http://localhost:4000';
const LOGIN_URL = `${BASE_URL}/auth/login`;

export function login(name, password) {
  return async dispatch => {
    const {token} = (await postAPI(LOGIN_URL, {
      name,
      password,
    })).data;

    dispatch({type: 'STORE_TOKEN', token});
  };
}
