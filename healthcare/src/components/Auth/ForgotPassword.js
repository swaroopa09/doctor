import React from "react";
import "./Auth.css";

const ForgotPassword = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Forgot Password</h2>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="btn-primary">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};
export default ForgotPassword;