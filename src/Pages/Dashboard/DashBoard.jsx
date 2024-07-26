
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; 

const Dashboard = () => {
  
  return (
    <div className="dashboard">
      <div className="button-container">
    
      <Link to="/Upload" className="btn Blue-btn">Upload Files</Link><br />&nbsp;<br />&nbsp;
      <Link to="/ViewFile" className="btn Blue-btn">View Files</Link>
        
       
      </div>
    </div>
  );
}

export default Dashboard;
