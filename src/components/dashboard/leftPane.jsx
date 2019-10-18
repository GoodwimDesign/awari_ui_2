import React from 'react';
import LogoThirtyPercent from '../../images/logos/AwariMainLogoTypeColor_30percent.png';

import './leftPane.scss';

const LeftPane = () => (
  <div className="left-pane-container">
    <img className="logo" src={LogoThirtyPercent} alt="Awari Logo" />
  </div>
);

export default LeftPane;
