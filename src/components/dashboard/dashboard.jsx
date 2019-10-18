import React from 'react';
import LeftPane from './leftPane';
import MiddlePane from './middlePane';

import './dashboard.scss';

const Dashboard = () => (
  <div className="dashboard-container">
    <div className="left-side"><LeftPane /></div>
    <div className="middle"><MiddlePane /></div>
    <div className="right-side">Chello</div>
  </div>
);

export default Dashboard;
