// src/Pages/Dashboard/DashBoard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; 
import { useAuth } from '../../context/AuthContext'; // Adjust the import path if needed

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="dashboard">
      <div className="button-container">
        <Link to="/Upload" className="btn Blue-btn">Upload Files</Link><br />&nbsp;<br />&nbsp;
        <Link to="/ViewFile" className="btn Blue-btn">View Files</Link>
        <br />&nbsp;<br />&nbsp;
        <button onClick={logout} className="btn Red-btn">Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
