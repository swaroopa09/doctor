import React from "react";
import "./Dashboard.css";

const DoctorDashboard = () => {
  const doctorName = "John Doe";

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Welcome, Dr. {doctorName}</h2>
      </header>

      <div className="dashboard-body">
        <aside className="sidebar">
          <ul>
            <li>Dashboard Overview</li>
            <li>My Appointments</li>
            <li>Patient Records</li>
            <li>EHR Access</li>
            <li>Drug Interaction Checker</li>
            <li>Video Consultations</li>
            <li>Stress Monitoring</li>
            <li>3D Medical Viewer</li>
            <li>Sentiment Alerts</li>
            <li>Logout</li>
          </ul>
        </aside>

        <main className="main-content">
          <div className="stats-cards">
            <div className="card">Appointments Today: <strong>8</strong></div>
            <div className="card">Patients Seen: <strong>15</strong></div>
            <div className="card">Stress Level: <span className="stress-low">Low</span></div>
          </div>

          <div className="calendar-section">
            <h3>Upcoming Appointments</h3>
            <div className="calendar-placeholder">[Calendar Here]</div>
          </div>

          <div className="alerts-section">
            <h3>Patient Sentiment Alerts</h3>
            <div className="alert-box">
              No critical alerts at this moment.
            </div>
          </div>

          <div className="section">
            <h3>3D Visualizations</h3>
            <div className="card">[Launch 3D Viewer]</div>
          </div>

          <div className="section">
            <h3>Drug Interaction Checker</h3>
            <div className="card">Enter Prescription to Verify Interactions</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DoctorDashboard;
