// axiosConfig.js
import axios from 'axios';
import { API_URL } from './config';

const axiosInstance = axios.create({
  baseURL: API_URL
});

//요청 인터셉터 설정
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

export default axiosInstance;