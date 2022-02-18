import axios from '../config/axios';

export const createPostCategory = async (subCategoryId) => {
  return axios.post('/post/category', { subCategoryId });
};
