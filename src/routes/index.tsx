import React from 'react';
import { Switch } from 'react-router-dom';

import LayoutDefault from '../pages/_layout/Default';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Card from '../pages/Card';
import Historic from '../pages/Historic';
import Product from '../pages/Product';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact layout={LayoutDefault} component={Home} />
      <Route path="/signin" layout={() => <></>} exact component={SignIn} />
      <Route path="/signup" layout={() => <></>} component={SignUp} />
      <Route path="/card" exact layout={LayoutDefault} component={Card} />
      <Route
        path="/historic"
        exact
        layout={LayoutDefault}
        component={Historic}
      />
      <Route path="/product" exact layout={LayoutDefault} component={Product} />
    </Switch>
  );
};

export default Routes;
