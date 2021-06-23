import styled from 'styled-components';
import { darken } from 'polished';

import { MAX_WIDTH_MEDIUM } from '../../utils/contants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 36px 32px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${MAX_WIDTH_MEDIUM}px;
  height: 36px;
  margin: 32px 0px;
  border-radius: 36px;
  overflow: hidden;
  background-color: #393e46;
  padding: 2px 0px 2px 14px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: ${MAX_WIDTH_MEDIUM + 16}px;
  justify-content: center;
`;

export const Card = styled.button`
  position: relative;
  z-index: 2;
  height: ${MAX_WIDTH_MEDIUM / 4}px;
  width: ${MAX_WIDTH_MEDIUM / 4}px;
  margin: 16px;
  padding: 16px;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  color: #eee;
  -webkit-box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.6s;

  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;

  &:hover {
    transform: scale(1.06);
  }

  > svg {
    position: absolute;
    top: -2px;
    left: -12px;

    transform: rotate(84deg);
  }

  img {
    flex: 1;
    object-fit: contain;
    height: 60%;
    width: 100%;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 4px;

    strong {
      margin-top: 8px;
      font-weight: bold;
    }

    span {
      margin-top: 2px;
      text-align: left;
    }
  }

  > button {
    position: relative;
    width: 50px;
    height: 25px;
    border: none;
    background-color: transparent;
    border-radius: 20px;
    z-index: 4;
    background-color: #fdca40;

    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;

    transition: background-color 0.6s;

    &:hover {
      background-color: ${darken(0.16, '#fdca40')};
    }
  }
`;
