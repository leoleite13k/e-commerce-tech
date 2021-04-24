import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
} from 'react-router-dom';

interface IRoute extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRoute> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {

  return (
    <ReactDOMRoute
      {...rest}
      render={() => (
        <Component />
      )}
    />
  );
};

export default Route;