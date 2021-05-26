import React, { ButtonHTMLAttributes } from 'react';

import Loader from '../Loader';

import { Container } from './styles';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<IButton> = ({
  secondary = false,
  isLoading = false,
  children,
  ...rest
}) => {
  return (
    <Container type="button" secondary={secondary} {...rest}>
      {isLoading ? <Loader /> : children}
    </Container>
  );
};

export default Button;
