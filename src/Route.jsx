import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/userPages/login/Login.jsx";
import Signup from "./pages/userPages/signup/Signup.jsx";
import AdminLogin from "./pages/admin/login/AdminLogin.jsx";
import Home from "./pages/userPages/home/Home.jsx";
import MyPage from "./pages/userPages/myPage/MyPage.jsx";
import Payment from "./pages/userPages/payment/Payment.jsx";
import Product from "./pages/admin/product/product.jsx";

export const baseURL = "http://192.168.0.2:8080";
export const S3Server =
  "http://ssh.kangsiwoo.com:9001/api/v1/download-shared-object/";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
