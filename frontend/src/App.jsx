import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import VerifyOTP from "./components/auth/VerifyOtp";
import SetUsername from "./components/auth/Setusername";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/set-username" element={<SetUsername />} />
      </Routes>
    </BrowserRouter>
  );
}
