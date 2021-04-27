import styled from 'styled-components';
import { darken } from 'polished';

import { IButton } from './index';

export const Container = styled.button<IButton>`
  height: 42px;
  border-radius: 8px;
  margin-top: 16px;
  border: none;
  background-color: ${({ secondary }) =>
    secondary ? 'transparent' : '#00adb5'};

  color: ${({ secondary }) => (secondary ? '#00adb5' : '#fff')};
  font-weight: 500;

  transition: background-color 0.6s, color 0.6s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ secondary }) =>
      darken(0.05, secondary ? 'transparent' : '#00adb5')};

    color: ${({ secondary }) => darken(0.07, secondary ? '#00adb5' : '#fff')};
  }
`;
