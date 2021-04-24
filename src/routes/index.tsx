import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} isPrivate />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Routes;