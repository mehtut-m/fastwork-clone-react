import axios from '../config/axios';

export const register = async (payload) => {
  return axios.post('/auth/register', payload);
};

export const requestlogIn = async (payload) => {
  return axios.post('/auth/login', payload);
};

export const signInGoogle = async (tokenId) => {
  return axios.post('/auth/login/google', {
    tokenId,
  });
};
