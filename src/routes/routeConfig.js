import { Navigate, Route, Routes } from 'react-router-dom';
import Register from '../pages/Register';

import Home from '../pages/Home';
import CreateServices from '../pages/Services/CreateServices';
import Login from '../pages/Login';
import ForgetPassword from '../pages/ForgetPassword';
import Chat from '../pages/Chat';
import Post from '../pages/Post';

function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/post" element={<Post />} />
      <Route path="/services/add" element={<CreateServices />} />
      <Route path="/message" element={<Chat />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteConfig;
