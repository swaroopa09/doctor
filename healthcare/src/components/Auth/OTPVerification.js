import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Auth.css";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { destination = "" } = location.state || {};

  const isPhone = /^\d{10,15}$/.test(destination); // Basic phone validation

  useEffect(() => {
    if (destination) {
      // You would trigger your backend API here to send the OTP
      console.log(`Sending OTP to ${destination} via ${isPhone ? "SMS" : "Email"}`);
    }
  }, [destination]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated OTP validation (use real API in production)
    if (otp === "123456") {
      alert("OTP Verified Successfully");
      navigate("/home"); // Navigate to home or dashboard
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>OTP Verification</h2>
        <p className="info-text">
          We've sent an OTP to your {isPhone ? "phone number" : "email"}: <strong>{destination}</strong>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary">Verify OTP</button>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
