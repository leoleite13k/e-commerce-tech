import React, { InputHTMLAttributes } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

import Divider from '../../Divider';

import { Container, Close } from './styles';

interface IInputIcon extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue(value: string): void;
  icon: React.ComponentType;
}

const InputIcon: React.FC<IInputIcon> = ({
  value,
  setValue,
  icon: Icon,
  ...rest
}) => {
  return (
    <Container>
      <Icon />
      <Divider heightCoponent="100%" />

      <input
        type="text"
        {...rest}
        value={value}
        onChange={event => setValue(event.currentTarget.value)}
      />
      {!!value && (
        <Close type="button" onClick={() => setValue('')}>
          <IoIosCloseCircle size={20} color="#eee" />
        </Close>
      )}
    </Container>
  );
};

export default InputIcon;
