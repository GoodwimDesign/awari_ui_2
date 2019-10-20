import React from 'react';

import './middlePane.scss';
import DashboardData from './dashboardData';

const MiddlePane = () => (
  <div className="middle-pane-container">
    <h1>Dashboard</h1>
    <div>
      <DashboardData />
    </div>
  </div>
);

export default MiddlePane;
