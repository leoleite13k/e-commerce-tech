import styled from 'styled-components';
import { lighten } from 'polished';

import { MAX_WIDTH_MEDIUM } from '../../../utils/contants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 36px;
`;

export const Add = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${lighten(0.05, '#222831')};
  border: none;
  position: fixed;
  bottom: 70px;
  right: 70px;
  transition: background-color 0.6s;

  &:hover {
    background-color: ${lighten(0.1, '#222831')};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${MAX_WIDTH_MEDIUM + 16}px;
  justify-content: center;
`;

export const Card = styled.div`
  position: relative;
  z-index: 2;
  height: ${MAX_WIDTH_MEDIUM / 4}px;
  width: ${MAX_WIDTH_MEDIUM / 1.3}px;
  margin: 16px;
  padding: 16px;
  border-radius: 6px;
  color: #eee;
  -webkit-box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.6s;

  display: flex;
  flex-direction: row;
  align-self: center;

  &:hover {
    transform: scale(1.06);
  }

  > svg {
    position: absolute;
    top: -2px;
    left: -12px;

    transform: rotate(84deg);
  }
`;

export const Portatil = styled.div`
  width: 200px;
  height: 100%;
  background-color: transparent;
  border: none;
  color: #eee;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    object-fit: contain;
    height: 60%;
    margin-bottom: 12px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > input {
    width: 60px;
    border-radius: 2px;
    border: none;

    font-size: 16px;
    text-align: center;
  }

  > button {
    width: 30px;
    margin: 0px 6px;
    border: none;
    background-color: #393e46;
    border-radius: 4px;

    color: #eee;
    -webkit-box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.83);
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.83);
    transition: background-color 0.6s;

    &:hover {
      background-color: ${lighten(0.1, '#393e46')};
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;

  > button {
    margin: 0 8px;
    background-color: transparent;
    border: none;
  }
`;
