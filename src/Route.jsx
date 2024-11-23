import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/userPages/login/Login.jsx";
import Signup from "./pages/userPages/signup/Signup.jsx";
import AdminLogin from "./pages/admin/login/AdminLogin.jsx";
import Home from "./pages/userPages/home/Home.jsx";
import axios from "axios";

export const baseURL = "http://192.168.0.2:8080"
export const S3Server = "http://ssh.kangsiwoo.com:9001/api/v1/download-shared-object/"

const apiServer = axios.create({
    baseURL: "http://192.168.0.2:8080"
})

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home
                                            server={apiServer}
                                            imageServer={S3Server}
                                        />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="admin/login" element={<AdminLogin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
