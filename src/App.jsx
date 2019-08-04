import React from 'react';
import { withAuth } from '@okta/okta-react';
import useAuth from './useAuth';
import Login from './components/home/login';

import './app.scss';

const App = withAuth(({ auth }) => {
  const [authenticated, user] = useAuth(auth);

  return (
    <div className="app-content">
      <Login
        auth={auth}
        authenticated={authenticated}
        user={user}
      />
    </div>
  );
});

export default App;
