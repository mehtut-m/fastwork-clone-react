import axios from '../config/axios';

export const createPostCategory = async (subCategoryId) => {
  return axios.post('/post/category', { subCategoryId });
};

export const addPostDetail = async (postId, name, description) => {
  return axios.patch('/post/name-description', { postId, name, description });
};
export const addPostImage = async (payload) => {
  return axios.post('/post/image', payload);
};
export const addInstruction = async (payload) => {
  return axios.patch('post/instruction', payload);
};
export const addApiPackages = async (payload) => {
  return axios.post('post/package', payload);
};
export const getPostById = async (id) => {
  return axios.get(`post/${id}`);
};
export const getPostBySubCategories = async (id) => {
  return axios.get(`post/subCategories/${id}`);
};
export const getAllPost = async (id, payload) => {
  return axios.get(`post/`, payload);
};
