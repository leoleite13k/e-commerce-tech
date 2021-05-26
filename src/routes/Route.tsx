/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
} from 'react-router-dom';

interface IRoute extends ReactDOMRouteProps {
  isPrivate?: boolean;
  layout?: React.ComponentType;
  component: React.ComponentType;
}

const Route: React.FC<IRoute> = ({
  isPrivate = false,
  component: Component,
  layout: Layout,
  ...rest
}) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => (
        <>
          {Layout ? (
            <Layout>
              <Component />
            </Layout>
          ) : (
            <Component />
          )}
        </>
      )}
    />
  );
};

export default Route;
