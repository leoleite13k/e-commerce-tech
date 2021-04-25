import React, { HTMLAttributes } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

import { Container, Close } from './styles';

interface IInput extends HTMLAttributes<HTMLInputElement> {
  value: string;
  setValue(value: string): void;
}

const Input: React.FC<IInput> = ({ value, setValue, ...rest }) => {
  return (
    <Container>
      <input type="text" name="search" {...rest} value={value} onChange={event => setValue(event.currentTarget.value)} />
      {!!value && (
        <Close type="button" onClick={() => setValue('')}>
          <IoIosCloseCircle size={20} color="#eee" />
        </Close>
      )}
    </Container>
  );
}

export default Input;