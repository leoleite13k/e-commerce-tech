import React from 'react';
import { Switch } from 'react-router-dom';

import LayoutDefault from '../pages/_layout/Default';
import LayoutAdmin from '../pages/_layout/Admin';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AdminHome from '../pages/Admin/Home';
import AdminProduct from '../pages/Admin/Product';
import Card from '../pages/Card';
import Historic from '../pages/Historic';
import Product from '../pages/Product';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact layout={LayoutDefault} component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/admin" exact layout={LayoutAdmin} component={AdminHome} />
      <Route
        path="/admin/product"
        layout={LayoutAdmin}
        component={AdminProduct}
      />
      <Route path="/card" exact layout={LayoutDefault} component={Card} />
      <Route
        path="/historic"
        exact
        layout={LayoutDefault}
        component={Historic}
      />
      <Route
        path="/product/:id"
        exact
        layout={LayoutDefault}
        component={Product}
      />
    </Switch>
  );
};

export default Routes;
