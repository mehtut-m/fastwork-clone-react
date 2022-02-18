import axios from '../config/axios';

export const createPost = async (payload) => {
  try {
    const formData = new FormData();
    formData.append('images', payload.images);
    console.log(formData);
    await axios.post('/posts', formData);
  } catch (err) {
    console.log(err);
  }
};
