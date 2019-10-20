import React from 'react';

import './middlePane.scss';
import DashboardDataList from './dashboardDataList';

const MiddlePane = () => (
  <div className="middle-pane-container">
    <h1>Dashboard</h1>
    <div>
      <DashboardDataList />
    </div>
  </div>
);

export default MiddlePane;
