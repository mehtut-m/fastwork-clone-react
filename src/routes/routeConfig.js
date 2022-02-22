import { Navigate, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";
import CreateServices from "../pages/Services/CreateServices";
import Login from "../pages/Login";
import Payment from "../pages/Payment";
import ForgetPassword from "../pages/ForgetPassword";
import Chat from "../pages/Chat";
import Post from "../components/Post/Post";
import MyPost from "../pages/Post/MyPost";
import { useContext } from "react";
import SubcategaryCatalogue from "../pages/Post/SubcategaryCatalogue";
import TestOrderFreelancePage from "../pages/Test/TestOrderFreelancePage";
import TestOrderUserPage from "../pages/Test/TestOrderUserPage";

function RouteConfig() {
  // const {} = useContext()
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/services/add" element={<CreateServices />} />
      <Route path="/message" element={<Chat />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/my/post" element={<MyPost />} />
      <Route path="/sub-category/:id" element={<SubcategaryCatalogue />} />
      <Route path="/post/:id" element={<Post />} />
      {/* // ! Test order page for freelance */}
      <Route
        path="/test/order/freelance"
        element={<TestOrderFreelancePage />}
      />
      {/* // ! Test order page for user */}
      <Route path="/test/order/user" element={<TestOrderUserPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteConfig;
