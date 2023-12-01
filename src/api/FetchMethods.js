import AxiosAuth from './AxiosAuth';

export default {
  post: (url, body) => {
    return AxiosAuth.post(url, body);
  },
  get: url => {
    return AxiosAuth.get(url);
  },
  put: (url, body) => {
    return AxiosAuth.put(url, body);
  },
  deleteData: url => {
    return AxiosAuth.delete(url);
  },
  patch: (url, body) => {
    return AxiosAuth.patch(url, body);
  },
};
