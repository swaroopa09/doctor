import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import OTPVerification from "./components/Auth/OTPVerification";
import ForgotPassword from "./components/Auth/ForgotPassword";
import HomePage from "./components/Home/HomePage";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import DoctorDashboard from "./components/Dashboard/DoctorDashboard";
import PatientDashboard from "./components/Dashboard/PatientDashboard";
import UserProfile from './components/Profile/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Home Page */}
        <Route path="/home" element={<HomePage />} />

        {/* Role-Based Dashboards */}
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
        <Route path="/dashboard/patient" element={<PatientDashboard />} />

        {/* User Profile */}
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
