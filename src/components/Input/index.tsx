import React, { InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { IoIosCloseCircle } from 'react-icons/io';

import Divider from '../Divider';

import { Container, Content, Close } from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  value: string;
  error?: { message: string };
  icon?: React.ComponentType;
}

const Input: React.FC<IInput> = ({
  name,
  register,
  setValue,
  value,
  error,
  icon: Icon,
  ...rest
}) => {
  return (
    <Container>
      <Content error={!!error}>
        {Icon && (
          <>
            <Icon />
            <Divider heightCoponent="100%" />
          </>
        )}

        <input type="text" {...rest} {...register(name)} />
        {!!value && (
          <Close type="button" tabIndex={-1} onClick={() => setValue(name, '')}>
            <IoIosCloseCircle size={20} color="#eee" />
          </Close>
        )}
      </Content>

      {error && <span>{error?.message}</span>}
    </Container>
  );
};

export default Input;
