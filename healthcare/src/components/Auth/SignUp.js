import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, emailOrPhone, password, role });
    alert(`Registered as ${role}. Redirecting to OTP verification...`);
    navigate("/otp");
  };

  const toggleRole = () => {
    setRole((prev) => (prev === "doctor" ? "patient" : "doctor"));
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="signup-header">
          {role === "doctor" ? (
            <>
              <p className="switch-role-text">
                Not a doctor?{" "}
                <button type="button" className="role-switch-btn" onClick={toggleRole}>
                  Register here
                </button>
              </p>
            </>
          ) : (
            <>
              <h2>Sign Up</h2>
              <p className="switch-role-text">
                Are you a doctor?{" "}
                <button type="button" className="role-switch-btn" onClick={toggleRole}>
                  Register here
                </button>
              </p>
            </>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

       

          <button type="submit" className="btn-primary">Send OTP</button>
        </form>

        <div className="auth-links">
          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
