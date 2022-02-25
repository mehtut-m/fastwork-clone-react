import axios from '../config/axios';

export const getUserOrderByStatus = async (status) => {
  const payload = { status };
  return axios.post(`/orders/get-order-by-status-user/`, payload);
};
export const getFreelanceOrderByStatus = async (status) => {
  return axios.post(`/orders/get-order-by-status-freelance/`, {
    status: status,
  });
};
export const getOrderDetail = async (orderId) => {
  return axios.get(`/orders/order-detail-image/${orderId}`);
};
