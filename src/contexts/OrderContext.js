import { createContext, useEffect, useReducer } from 'react';
import { getUserOrderByStatus, getFreelanceOrderByStatus } from '../apis/order';
import axios from '../config/axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const OrderContext = createContext();
const filter = ['WORKING', 'REVIEW', 'REVISE', 'COMPLETE'];

const OrderContextProvider = ({ children }) => {
  const { pathname } = useLocation();
  const isFreelance = pathname.includes('freelance');
  const [order, setOrder] = useState([]);
  const [activeItem, setActiveItem] = useState(0);
  const [activeOrderDetail, setActiveOrderDetail] = useState({});
  const orderItem = order[activeItem];

  const fetchOrderById = async (orderId) => {
    try {
      const res = await axios.get(`/orders/${orderId}`);
      setActiveOrderDetail(res.data.order);
    } catch (err) {
      console.log(err);
    }
  };

  const submitWork = async (commentUser, imageUser, orderId, revise) => {
    const formData = new FormData();
    formData.append('orderId', orderId);
    formData.append('comment', commentUser);
    formData.append('image', imageUser);
    try {
      const res = await axios.patch('/orders/update-status-review', formData);
      if (res.status === 200) {
        setActiveOrderDetail(res.data.order);
        await refreshOrder();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const rejectOrder = async (commentUser, imageUser, orderId, revise) => {
    const formData = new FormData();
    formData.append('orderId', orderId);
    formData.append('comment', commentUser);
    formData.append('image', imageUser);
    try {
      const res = await axios.patch('/orders/review/reject', formData);
      if (res.status === 200) {
        setActiveOrderDetail(res.data.order);
        await refreshOrder();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const submitApproval = async (orderId) => {
    try {
      const res = await axios.patch(`/orders/review/approve/${orderId}`);
      if (res.status === 200) {
        setActiveOrderDetail(res.data.order);
        await refreshOrder();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const refreshOrder = async () => {
    getUserOrderByStatus(filter)
      .then((res) => {
        setOrder([...res.data.order]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (isFreelance) {
      getFreelanceOrderByStatus(['WORKING', 'REVIEW', 'REVISE', 'COMPLETE'])
        .then((res) => {
          setOrder([...res.data.order]);
        })
        .catch((err) => console.log(err));
    } else {
      refreshOrder();
    }
  }, []);

  return (
    <OrderContext.Provider
      value={{
        order,
        orderItem,
        fetchOrderById,
        setActiveItem,
        rejectOrder,
        submitApproval,
        submitWork,
        refreshOrder,
        activeOrderDetail,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;

export { OrderContext };
