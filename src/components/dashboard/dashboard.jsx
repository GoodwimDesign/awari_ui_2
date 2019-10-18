import React from 'react';

import './dashboard.scss';
import LeftPane from './leftPane';

const Dashboard = () => (
  <div className="dashboard-container">
    <div className="left-side"><LeftPane /></div>
    <div className="middle">Hi</div>
    <div className="right-side">Chello</div>
  </div>
);

export default Dashboard;
