import React from 'react';
import AwariMainLogo from '../shared/awariMainLogo';
import LoginForm from './loginForm';

import './login.scss';
import AppConfig from '../../appConfig';

const Login = () => (
  <div className="login-content">
    <div className="login-border" />
    <div className="login-stuff">
      <div className="login-logo">
        <AwariMainLogo />
      </div>
      <div className="login-tagline">
        <h2>{AppConfig.labels.login.tagline}</h2>
      </div>
      <LoginForm />
    </div>
    <div className="login-border" />
  </div>
);

export default Login;
