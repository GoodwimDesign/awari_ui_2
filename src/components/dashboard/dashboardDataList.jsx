import React from 'react';
import Clock from '../../images/dashboard/clock.png';

import './dashboardData.scss';

const DashboardDataList = () => (
  <div className="dashboard-data-list">
    <div className="dashboard-data-item">
      <img className="data-icon" src={Clock} alt="Clock icon" />
      <div className="data">
        <div className="data-title">No HR data found</div>
        <div className="data-details">Please sync HR data</div>
        <div className="data-action">
          <button className="action-button" type="button">Sync Now</button>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardDataList;
