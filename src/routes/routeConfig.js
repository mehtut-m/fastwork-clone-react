import { Navigate, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Register from '../pages/Register';
import Order from '../pages/Order';
import Home from '../pages/Home';
import CreateServices from '../pages/Services/CreateServices';
import Login from '../pages/Login';
import Payment from '../pages/Payment';
import ForgetPassword from '../pages/ForgetPassword';
import Chat from '../pages/Chat';
import Post from '../components/Post/Post';
import MyPost from '../pages/Post/MyPost';
import SubcategaryCatalogue from '../pages/Post/SubcategaryCatalogue';
import ScrollToTop from '../components/Utils/ScrollToTop';

import { UserContext } from '../contexts/UserContext';

function RouteConfig() {
  const { user } = useContext(UserContext);

  return (
    <>
      <ScrollToTop />
      <Routes>
        {user?.id ? (
          <>
            <Route path="/services/add" element={<CreateServices />} />
            <Route path="/message" element={<Chat />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/order" element={<Order />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/my/post" element={<MyPost />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/sub-category/:id" element={<SubcategaryCatalogue />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default RouteConfig;
