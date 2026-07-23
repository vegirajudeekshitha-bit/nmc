import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "./components/Auth/Landing";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ForgotPassword from "./components/Auth/ForgotPassword";

import Dashboard from "./components/Dashboard/Dashboard";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/dashboard/*" element={<Dashboard />} />

      <Route path="*" element={<Navigate to="/" />} />

    </Routes>

  );

}

export default App;