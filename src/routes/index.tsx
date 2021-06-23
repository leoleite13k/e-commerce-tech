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
import Purchase from '../pages/Purchase';
import Historic from '../pages/Historic';
import HistoricPurchase from '../pages/HistoricPurchase';
import Product from '../pages/Product';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact isGlobal layout={LayoutDefault} component={Home} />
      <Route path="/card" isGlobal layout={LayoutDefault} component={Card} />
      <Route
        path="/product/:id"
        isGlobal
        layout={LayoutDefault}
        component={Product}
      />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route
        path="/purchase"
        exact
        isPrivate
        layout={LayoutDefault}
        component={Purchase}
      />
      <Route
        path="/historic"
        isPrivate
        layout={LayoutDefault}
        component={Historic}
      />
      <Route
        path="/purchase/:id"
        isPrivate
        layout={LayoutDefault}
        component={HistoricPurchase}
      />
      <Route
        path="/admin"
        exact
        isAdmin
        isPrivate
        layout={LayoutAdmin}
        component={AdminHome}
      />
      <Route
        path="/admin/product"
        exact
        isAdmin
        isPrivate
        layout={LayoutAdmin}
        component={AdminProduct}
      />
      <Route
        path="/admin/product/:id"
        isAdmin
        isPrivate
        layout={LayoutAdmin}
        component={AdminProduct}
      />
    </Switch>
  );
};

export default Routes;
