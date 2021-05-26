import React from 'react';

import { Container } from './styles';

interface ICheckBox {
  label?: string;
}

const CheckBox: React.FC<ICheckBox> = ({ label }) => {
  return (
    <Container>
      <input type="checkbox" />
      <span>{label}</span>
    </Container>
  );
};

export default CheckBox;
