import styled from 'styled-components';

import { MAX_WIDTH_SMALL } from '../../utils/contants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 90px);
  padding: 32px 36px 32px;
`;

export const Content = styled.div`
  height: ${MAX_WIDTH_SMALL / 2}px;
  width: 100%;
  max-width: ${MAX_WIDTH_SMALL}px;
  padding: 12px;
  margin: 8px 0px;
  border-radius: 6px;
  -webkit-box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > svg {
    margin-bottom: 12px;
  }

  > span {
    margin-bottom: 52px;
  }

  > button {
    border: none;
    background: none;
    margin-bottom: 12px;

    color: #00adb5;
  }
`;
