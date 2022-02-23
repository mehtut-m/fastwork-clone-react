import axios from '../config/axios';

export const getAllPost = async (id, payload) => {
  return axios.get(`post/`, payload);
};
