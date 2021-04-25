import React from 'react';

import { Container } from './styles';

export interface IDivider {
  heightCoponent?: string;
  widthComponent?: string;
  horizontal?: boolean;
}

const Divider: React.FC<IDivider> = ({ heightCoponent = '50%', widthComponent = '1px', horizontal = false }) => {
  return <Container heightCoponent={heightCoponent} widthComponent={widthComponent} horizontal={horizontal} />;
}

export default Divider;