import React from 'react';
import PropTypes from 'prop-types';
import AwariMainLogo from '../shared/awariMainLogo';
import AppConfig from '../../appConfig';

import './login.scss';

const handleAuth = (auth, authenticated) => (authenticated ? auth.logout() : auth.login());


const formatButtonText = authenticated => (
  authenticated ? AppConfig.labels.login.logoutText : AppConfig.labels.login.loginText
);

const Login = ({ auth, authenticated }) => (
  <div className="login-content">
    <div className="login-border" />
    <div className="login-stuff">
      <div className="login-logo">
        <AwariMainLogo />
      </div>
      <div className="login-tagline">
        <h2>{AppConfig.labels.login.tagline}</h2>
      </div>
      <div className="submit-button">
        { authenticated !== null && (
          <button
            type="submit"
            className="button"
            onClick={() => handleAuth(auth, authenticated)}
          >
            {formatButtonText(authenticated)}
          </button>
        )}
      </div>
    </div>
    <div className="login-border" />
  </div>
);

Login.defaultProps = {
  authenticated: false,
  auth: {
    login: () => {},
    logout: () => {},
  },
};

Login.propTypes = {
  auth: PropTypes.shape({
    login: PropTypes.func,
    logout: PropTypes.func,
  }),
  authenticated: PropTypes.bool,
};

export default Login;
