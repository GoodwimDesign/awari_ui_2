import React from 'react';
import LogoThirtyPercent from '../../images/logos/AwariMainLogoTypeColor_30percent.png';

import './leftPane.scss';

const LeftPane = () => (
  <div className="left-pane-container">
    <img className="logo" src={LogoThirtyPercent} alt="Awari Logo" />
    <div className="links-container">
      <span className="link-item">Dashboard</span>
      <span className="link-item">Messages</span>
      <span className="link-item">Feedback</span>
      <span className="link-item">Goals</span>
      <span className="link-item">Team</span>
    </div>
  </div>
);

export default LeftPane;
