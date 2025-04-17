import React, { useState } from "react";
import "./UserProfile.css";

const initialProfiles = [
  {
    id: 1,
    name: "John Doe",
    role: "Patient",
    email: "john@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Dr. Smith",
    role: "Doctor",
    email: "smith@hospital.com",
    phone: "987-654-3210",
  },
];

const UserProfile = () => {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    const newProfile = {
      id: Date.now(),
      ...formData,
    };
    setProfiles([...profiles, newProfile]);
    setFormData({ name: "", role: "", email: "", phone: "" });
  };

  const handleEdit = (profile) => {
    setSelectedProfile(profile);
    setFormData(profile);
  };

  const handleUpdate = () => {
    const updated = profiles.map((p) =>
      p.id === selectedProfile.id ? formData : p
    );
    setProfiles(updated);
    setSelectedProfile(null);
    setFormData({ name: "", role: "", email: "", phone: "" });
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div className="profile-container">
      <h2>User Profile Management</h2>

      <div className="form-section">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="role"
          placeholder="Role (Patient/Doctor/Admin)"
          value={formData.role}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        {selectedProfile ? (
          <button onClick={handleUpdate} className="update-btn">
            Update Profile
          </button>
        ) : (
          <button onClick={handleAdd} className="add-btn">
            Add Profile
          </button>
        )}
      </div>

      <div className="profiles-list">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <h3>{profile.name}</h3>
            <p><strong>Role:</strong> {profile.role}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
            <button onClick={() => handleEdit(profile)}>Edit</button>
            <button onClick={() => handleDelete(profile.id)} className="delete-btn">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
