import axios from 'axios';
import { BASE_URL } from '../../constants/url';

const parseErrorCode = error => {
  if (error.response) {
    if (error.response.status === 401) {
      // If auth failed
    } else if (error.response.status === 500) {
      // If server failed
    } else if (error.response.status === 422) {
      // If request params are errored
    }
  } else {
    // Something happened in setting up the request that triggered an Error
  }
  // Do something with request error
  return Promise.reject(error.response);
};

const API = axios.create();
API.defaults.baseURL = BASE_URL;

// Response parsing interceptor
API.interceptors.response.use(response => response, error => parseErrorCode(error));

// eslint-disable-next-line import/prefer-default-export
export const getMovieDetails = id => {
  const requestUrl = `movie/${id}`;
  return axios.get(requestUrl);
};
// export default API;
