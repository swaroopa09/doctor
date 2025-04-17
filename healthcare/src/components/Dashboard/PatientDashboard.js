import React from "react";
import "./Dashboard.css";

const PatientDashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        Hi John Doe, Welcome Back!
      </header>
      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <ul>
            <li>Book Appointment</li>
            <li>AI Doctor Match</li>
            <li>View Doctors</li>
            <li>My Health Reports</li>
            <li>Family Health Monitoring</li>
            <li>Medication Reminders</li>
            <li>Gamification & Rewards</li>
            <li>VR Therapy / Chatbot</li>
            <li>3D Visualizations</li>
            <li>QR Health Card</li>
            <li>Lab Test Booking</li>
            <li>Mental Health Support</li>
            <li>Video Consultations</li>
            <li>Logout</li>
          </ul>
        </aside>
        <main className="dashboard-content">
          <div className="cards-container">
            <div className="card">
              <h4>Upcoming Appointments</h4>
              <p>Dr. Smith - 20 Apr, 10 AM</p>
            </div>
            <div className="card">
              <h4>Medication Timeline</h4>
              <p>8 AM: Metformin<br />12 PM: Insulin</p>
            </div>
            <div className="card">
              <h4>Health Summary</h4>
              <p>Blood Pressure: 120/80<br />Glucose: 90 mg/dL</p>
            </div>
            <div className="card">
              <h4>AI Chatbot</h4>
              <p>"Hi! How can I assist with your symptoms today?"</p>
            </div>
            <div className="card">
              <h4>QR Health Card</h4>
              <p>[QR Code Preview - Click to Download]</p>
            </div>
            <div className="card">
              <h4>VR Therapy</h4>
              <p><button>Start VR Session</button></p>
            </div>
            <div className="card">
              <h4>Gamification</h4>
              <p>Points: 1200 | Rewards: Free Health Check</p>
            </div>
            <div className="card">
              <h4>Book Lab Test</h4>
              <p><button>Book Now</button> (Home collection available)</p>
            </div>
            <div className="card">
              <h4>Video Consultation</h4>
              <p><button>Join Call</button></p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PatientDashboard;
