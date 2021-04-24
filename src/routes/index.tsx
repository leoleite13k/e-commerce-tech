import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Routes;