import styled from 'styled-components';
import { lighten, darken } from 'polished';

import { MAX_WIDTH_SMALL } from '../../utils/contants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 36px 36px;
`;

export const Content = styled.div`
  height: ${MAX_WIDTH_SMALL / 3}px;
  width: 100%;
  max-width: ${MAX_WIDTH_SMALL}px;
  padding: 6px;
  margin: 8px 0px;
  -webkit-box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.73);
  box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.73);

  display: flex;

  &:first-child {
    padding-top: 12px;
  }

  &:last-child {
    padding-bottom: 12px;
  }

  > div {
    padding: 12px 0px;
    margin: 0px 6px;
    display: flex;
    flex: 1;
    flex-direction: column;

    &:nth-child(1) {
      position: relative;
      align-items: center;

      svg {
        position: absolute;
        top: -6px;
        left: -24px;

        transform: rotate(84deg);
      }

      img {
        flex: 1;
        object-fit: contain;
        height: 80%;
        width: 80%;
        margin-bottom: 8px;
      }

      strong {
        font-weight: bold;
      }
    }

    &:nth-child(2) {
      align-items: center;
      justify-content: space-evenly;

      > button {
        border: none;
        background-color: transparent;
      }

      > div {
        height: 30px;

        > input {
          width: 60px;
          height: 100%;
          border-radius: 2px;
          border: none;

          font-size: 16px;
          text-align: center;
        }

        > button {
          width: 30px;
          height: 100%;
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
      }

      > button {
        padding: 4px;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &:nth-child(3) {
      align-items: center;
      justify-content: center;

      > strong {
        font-weight: bold;

        span {
          font-weight: 500;
        }
      }
    }
  }
`;

export const Total = styled.div`
  height: 70px;
  width: 100%;
  max-width: ${MAX_WIDTH_SMALL}px;
  padding: 12px;
  margin: 8px 0px;
  -webkit-box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.73);
  box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.73);

  display: flex;

  > div {
    margin: 0px 6px;
    display: flex;
    flex: 1;
    flex-direction: column;

    &:nth-child(1) {
      justify-content: center;

      > button {
        height: 100%;
        max-width: 80%;
        border-radius: 4px;
        border: none;
        background-color: #fdca40;
        transition: background-color 0.6s;

        &:hover {
          background-color: ${darken(0.16, '#fdca40')};
        }
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
