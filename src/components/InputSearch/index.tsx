import React, { InputHTMLAttributes } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';

import Divider from '../Divider';

import { Container, Content, ContentLoader, Close } from './styles';
import Loader from '../Loader';

interface IInputSearch extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleOnChange: (text: string) => void;
  isLoading: boolean;
}

const InputSearch: React.FC<IInputSearch> = ({
  handleOnChange,
  value,
  isLoading,
}) => {
  return (
    <Container>
      <Content>
        <FiSearch size={22} color="#eee" />
        <Divider heightCoponent="100%" />

        <input
          type="text"
          value={value}
          onChange={event => handleOnChange(event.currentTarget.value)}
        />
        {isLoading && (
          <ContentLoader>
            <Loader />
          </ContentLoader>
        )}
        {!!value && (
          <Close type="button" tabIndex={-1} onClick={() => handleOnChange('')}>
            <IoIosCloseCircle size={20} color="#eee" />
          </Close>
        )}
      </Content>
    </Container>
  );
};

export default InputSearch;
