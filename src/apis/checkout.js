import axios from '../config/axios';

export const checkoutCreditCard = async (payload) => {
  return axios.post('/checkout', payload);
};
