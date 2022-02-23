import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkoutCreditCard } from '../apis/checkout';
import axios from '../config/axios';

const CheckoutContext = createContext();

const CheckoutContextProvider = ({ children }) => {
  const [order, setOrder] = useState({ requirement: '', requirementImage: [] });
  const [packageId, setPackageId] = useState(null);
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  const selectPackage = (id, post) => {
    setPackageId(id);
    setPost(post);
  };

  const updateOrderOnChange = async (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const updateOrderImage = async (e) => {
    setOrder({
      ...order,
      requirementImage: [...order.requirementImage, e.target.files],
    });
  };

  const clearOrder = () => {
    setOrder({ requirement: '', requirementImage: [] });
  };

  const proceedToPayment = () => {
    navigate('/payment', { replace: true });
  };

  const checkoutPayment = async (payload) => {
    const formData = new FormData();
    for (const key in payload) {
      formData.append(key, payload[key]);
    }
    return checkoutCreditCard(formData);
  };

  return (
    <CheckoutContext.Provider
      value={{
        order,
        packageId,
        post,
        clearOrder,
        updateOrderOnChange,
        updateOrderImage,
        proceedToPayment,
        selectPackage,
        checkoutPayment,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContextProvider;

export { CheckoutContext };
