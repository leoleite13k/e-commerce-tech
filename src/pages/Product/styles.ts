import styled from 'styled-components';
import { darken } from 'polished';

import { MAX_WIDTH_SMALL } from '../../utils/contants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 36px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  min-height: 725px;
  max-width: ${MAX_WIDTH_SMALL / 1.5}px;

  -webkit-box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);

  > svg {
    position: absolute;
    top: -2px;
    left: -12px;

    transform: rotate(84deg);
  }

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;

    > h3 {
      font-weight: bold;
      margin-top: 16px;
    }

    > span {
      margin: 6px 0px;
    }

    strong {
      font-weight: bold;
    }
  }
`;

export const Portatil = styled.div`
  margin-bottom: 12px;

  > img {
    flex: 1;
    object-fit: contain;
    width: 100%;

    margin-bottom: 12px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 12px;
  }

  > button {
    width: 60px;
    height: 30px;
    border: none;
    background-color: transparent;
    border-radius: 20px;
    z-index: 3;
    background-color: #fdca40;
    margin: 12px 0px;

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
