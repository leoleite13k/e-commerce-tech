import styled from 'styled-components';

import { MIN_WIDTH_LARGE } from '../../../utils/contants';

export const Container = styled.div`
  padding-top: 80px;
`;

export const Header = styled.div`
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: #222831;
  border-bottom: 1px solid #393e46;

  display: flex;
  flex-direction: row;

  > div {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 0px 12px;

    &:nth-child(1) {
      justify-content: flex-start;
      padding-left: 36px;

      @media (min-width: ${MIN_WIDTH_LARGE}px) {
        padding-left: 72px;
      }
    }

    &:nth-child(2) {
      justify-content: center;
    }

    &:nth-child(3) {
      justify-content: flex-end;
      padding-right: 36px;

      > button {
        position: relative;
        border: none;
        background-color: transparent;
      }

      @media (min-width: ${MIN_WIDTH_LARGE}px) {
        padding-right: 72px;
      }
    }
  }
`;
