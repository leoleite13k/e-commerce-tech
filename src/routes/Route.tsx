import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
} from 'react-router-dom';

interface IRoute extends ReactDOMRouteProps {
  isPrivate?: boolean;
  layout: React.ComponentType;
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
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
};

export default Route;
