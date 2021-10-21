import './App.css';
import React from 'react';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Browse, Home, Signin, Signup } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

function App() {
  let {user} = useAuthListener();
  // user=user.user==null? null : user;
  console.log('the value of user is: ',user);
  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedinPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedinPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        {/* <ProtectedRoute user={user} path={ROUTES.HOME}>
          <Home />
        </ProtectedRoute> */}
        <IsUserRedirect user={user} loggedinPath={ROUTES.BROWSE} path={ROUTES.HOME} >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
