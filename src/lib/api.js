import axios from 'axios';

export const getAPI = url => axios.get(url);
export const postAPI = (url, data) => axios.post(url, data);
