import React from 'react';
import LeftPane from './leftPane';

import './dashboard.scss';

const Dashboard = () => (
  <div className="dashboard-container">
    <div className="left-side"><LeftPane /></div>
    <div className="middle">Hi</div>
    <div className="right-side">Chello</div>
  </div>
);

export default Dashboard;
