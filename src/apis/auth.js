import axios from '../config/axios';

export const register = async (payload) => {
  return axios.post('/auth/register', payload);
};
