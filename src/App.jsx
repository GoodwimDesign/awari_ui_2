import React from 'react';
import { withAuth } from '@okta/okta-react';
import useAuth from './useAuth';
import Login from './components/home/login';


const App = withAuth(({ auth }) => {
  const [authenticated, user] = useAuth(auth);

  return (
    <>
      <Login
        auth={auth}
        authenticated={authenticated}
        user={user}
      />
    </>
  );
});

export default App;
