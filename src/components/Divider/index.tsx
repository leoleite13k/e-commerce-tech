import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

export interface IDivider extends HTMLAttributes<HTMLDivElement> {
  heightCoponent?: string;
  widthComponent?: string;
  horizontal?: boolean;
}

const Divider: React.FC<IDivider> = ({
  heightCoponent = '50%',
  widthComponent = '1px',
  horizontal = false,
  ...rest
}) => {
  return (
    <Container
      heightCoponent={heightCoponent}
      widthComponent={widthComponent}
      horizontal={horizontal}
      {...rest}
    />
  );
};

export default Divider;
