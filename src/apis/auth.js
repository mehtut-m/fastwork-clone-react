import axios from '../config/axios';

export const register = async payload => {
  return axios.post('/auth/register', payload);
};

export const login = async payload => {
  return axios.post('/auth/login', payload);
};
