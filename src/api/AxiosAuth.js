import axios from 'axios';

export const baseURL = 'http://192.168.1.5:5000/';
const AxiosAuth = axios.create({
  baseURL: `${baseURL}api/`,
});

export default AxiosAuth;
