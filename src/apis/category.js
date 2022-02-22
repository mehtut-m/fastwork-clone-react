import axios from '../config/axios';

export const getAllCategories = async (payload) => {
  return axios.get('/categories');
};

export const getSubCategoryById = async (id) => {
  return axios.get(`/categories/sub-category/${id}`);
};
