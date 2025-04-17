import React from "react";
import "./Dashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">Welcome Admin, [Name]</header>
      <div className="dashboard-body">
        <aside className="sidebar">
          <nav>
            <ul>
              <li>Dashboard Overview</li>
              <li>Manage Users</li>
              <li>Doctor Approvals</li>
              <li>Payment Tracking</li>
              <li>Doctor Analytics</li>
              <li>System Analytics</li>
              <li>Reports & Logs</li>
              <li>Logout</li>
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <div className="stats-cards">
            <div className="card">Total Patients: <strong>500</strong></div>
            <div className="card">Registered Doctors: <strong>120</strong></div>
            <div className="card">Active Appointments: <strong>30</strong></div>
            <div className="card">Revenue Today / Month: <strong>$2,300 / $45,000</strong></div>
          </div>

          <div className="section">
            <h3>Pending Doctor Approvals</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Specialization</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dr. Smith</td>
                  <td>Cardiology</td>
                  <td>Pending</td>
                  <td><button>Approve</button></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="section">
            <h3>User Activity Summary</h3>
            <div className="chart-placeholder">[Chart Component Placeholder]</div>
          </div>

          <div className="section">
            <h3>Doctor Analytics</h3>
            <p>Top Performing Doctors, Average Ratings, Appointments per Week</p>
          </div>

          <div className="section">
            <h3>System Alerts / Notifications</h3>
            <ul>
              <li>System Update Scheduled</li>
              <li>New User Registrations: 10</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
