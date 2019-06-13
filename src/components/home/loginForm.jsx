import React from 'react';
import AppConfig from '../../appConfig';

import './loginForm.scss';

const LoginForm = () => (
  <div className="login-form">
    <form>
      <div className="user-input">
        <input
          componentclass="input"
          type="text"
          id="userNameField"
          placeholder="Username..."
        />
      </div>
      <div className="password-input">
        <input
          componentclass="input"
          type="password"
          id="passwordField"
          placeholder="Password..."
        />
      </div>
      <div className="remember-me">
        <input
          name="rememberMeCheckbox"
          type="checkbox"
          checked={false}
          onChange={() => {}}
        />
        <span>{AppConfig.labels.login.rememberMeLabel}</span>
      </div>
      <div className="submit-button">
        <button type="submit" className="button">
          {AppConfig.labels.login.submitButton}
        </button>
      </div>
    </form>
  </div>
);

export default LoginForm;
