import React, { HTMLAttributes } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

import { Container, Close } from './styles';

interface IInput extends HTMLAttributes<HTMLInputElement> {

}

const Input: React.FC<IInput> = ({ ...rest }) => {
  return (
    <Container>
      <input {...rest} type="text" name="search" />
      <Close type="button">
        <IoIosCloseCircle size={20} color="#eee" />
      </Close>
    </Container>
  );
}

export default Input;