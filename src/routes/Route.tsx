/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface IRoute extends ReactDOMRouteProps {
  isGlobal?: boolean;
  isPrivate?: boolean;
  isAdmin?: boolean;
  layout?: React.ComponentType;
  component: React.ComponentType;
}

const Route: React.FC<IRoute> = ({
  isAdmin = false,
  isPrivate = false,
  isGlobal = false,
  component: Component,
  layout: Layout,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        if (!isPrivate && !isGlobal && !!user) {
          return (
            <Redirect
              to={{
                pathname: user.administrador ? '/admin' : '/',
              }}
            />
          );
        }

        if (isPrivate && !user) {
          return (
            <Redirect
              to={{
                pathname: '/signin',
              }}
            />
          );
        }

        if (isAdmin && (!user || !user.administrador)) {
          return (
            <Redirect
              to={{
                pathname: '/',
              }}
            />
          );
        }

        return (
          <>
            {Layout ? (
              <Layout>
                <Component />
              </Layout>
            ) : (
              <Component />
            )}
          </>
        );
      }}
    />
  );
};

export default Route;
