import styled from 'styled-components';

import { MAX_WIDTH_MEDIUM, MIN_WIDTH_LARGE } from '../../utils/contants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 36px;
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
  width: ${MAX_WIDTH_MEDIUM / 1.3}px;
  margin: 16px;
  padding: 16px;
  border-radius: 6px;
  color: #eee;
  -webkit-box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.6s;

  display: flex;
  flex-direction: column;
  align-self: center;

  > h3 {
    position: absolute;
    top: 12px;
    left: 12px;
  }
`;

export const Product = styled.div`
  display: flex;
  flex: 1;

  > div {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 12px;

    &:nth-child(1) {
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      > img {
        height: 150px;
        width: 150px;
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
        font-weight: 500;
        color: #00adb5;
      }

      @media (min-width: ${MIN_WIDTH_LARGE}px) {
        padding-right: 72px;
      }
    }
  }
`;

export const Total = styled.div`
  height: 70px;
  width: 100%;
  max-width: ${MAX_WIDTH_MEDIUM / 1.3}px;
  padding: 12px;
  margin: 16px;
  border-radius: 6px;
  -webkit-box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.1);

  display: flex;

  > div {
    margin: 0px 6px;
    display: flex;
    flex: 1;
    flex-direction: column;

    &:nth-child(1) {
      align-items: center;
      justify-content: center;

      span {
        margin-bottom: 4px;
      }

      strong {
        font-weight: bold;
      }
    }

    &:nth-child(2) {
      align-items: center;
      justify-content: center;

      span {
        margin-bottom: 4px;
      }

      strong {
        font-weight: bold;
      }
    }

    &:nth-child(3) {
      align-items: center;
      justify-content: center;

      span {
        margin-bottom: 4px;
      }

      strong {
        font-weight: bold;
      }
    }
  }
`;
