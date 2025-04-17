import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { FaCalendarAlt, FaUserMd, FaFileMedical, FaCreditCard } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-logo">+ Home</div>
        <nav className="home-nav">
          <Link to="/dashboard/admin">Admin</Link>
          <Link to="/dashboard/doctor">Doctor</Link>
          <Link to="/dashboard/patient">Patient</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>

      <h1 className="home-title">Welcome to Healthcare Platform</h1>

      <div className="home-features">
        <div className="feature-card">
          <FaCalendarAlt className="feature-icon" />
          <h2>Book Appointment</h2>
          <p>Schedule your next visit with a healthcare provider.</p>
        </div>
        <div className="feature-card">
          <FaUserMd className="feature-icon" />
          <h2>Find Doctors</h2>
          <p>Search for experienced and qualified healthcare professionals.</p>
        </div>
        <div className="feature-card">
          <FaFileMedical className="feature-icon" />
          <h2>View Medical Records</h2>
          <p>Access your health information and previous medical records.</p>
        </div>
        <div className="feature-card">
          <FaCreditCard className="feature-icon" />
          <h2>Billing & Payments</h2>
          <p>Manage your invoices and payments securely.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
