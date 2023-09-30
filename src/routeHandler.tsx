import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import SignUp from "./pages/signUp/signUp";
const RouteHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};
export default RouteHandler;
