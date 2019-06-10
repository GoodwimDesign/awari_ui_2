import React from 'react';
import AwariMainLogo from '../shared/awariMainLogo';

import './login.css';


const buttonMessage = 'LOG IN';
const taglineMessage = 'DISCOVER WITHIN';
const rememberMeMessage = 'Remember Me';

const Login = () => (
  <div className="login-content">
    <AwariMainLogo />
    <div className="login-tagline">
      <h2>{taglineMessage}</h2>
    </div>
    <div className="login-form">
      <form>
        <input
          componentclass="input"
          type="text"
          id="userNameField"
          placeholder="Username..."
        />
        <input
          componentclass="input"
          type="password"
          id="passwordField"
          placeholder="Password..."
        />
      </form>
    </div>
    <div className="rememberMe">
      <input
        name="rememberMeCheckbox"
        type="checkbox"
        checked={false}
        onChange={() => {}}
      />
      <span>{rememberMeMessage}</span>
    </div>
    <button type="submit" className="login-button">
      {buttonMessage}
    </button>
  </div>
);

export default Login;
