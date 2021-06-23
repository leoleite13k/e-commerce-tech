import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import { Container } from './styles';

interface ICheckBox {
  label?: string;
  name: string;
  register: UseFormRegister<FieldValues>;
}

const CheckBox: React.FC<ICheckBox> = ({ label, name, register }) => {
  return (
    <Container>
      <input type="checkbox" {...register(name)} />
      <span>{label}</span>
    </Container>
  );
};

export default CheckBox;
