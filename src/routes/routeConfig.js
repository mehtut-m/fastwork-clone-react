import { Navigate, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";

import Home from "../pages/Home";
import CreateServices from "../pages/Services/CreateServices";
import Login from "../pages/Login";
import Payment from "../pages/Payment";
import ForgetPassword from "../pages/ForgetPassword";
import Chat from "../pages/Chat";
import Post from "../pages/Post";
import MyPost from "../pages/MyPost";
import { useContext } from "react";

function RouteConfig() {
  // const {} = useContext()
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/post" element={<Post />} />
      <Route path="/services/add" element={<CreateServices />} />
      <Route path="/message" element={<Chat />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="my/post" element={<MyPost />} />
      <Route path="post/:id" element={<Post />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteConfig;
