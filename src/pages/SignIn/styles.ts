import styled from 'styled-components';

import { MAX_WIDTH_MEDIUM } from '../../utils/contants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 36px;
  height: 100vh;

  > form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${MAX_WIDTH_MEDIUM / 2.3}px;
    padding: 32px;

    -webkit-box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);

    > h1 {
      font-weight: bold;
      text-align: center;
      margin-bottom: 16px;
    }
  }
`;

export const ContentCheckBox = styled.div`
  margin-top: 12px;
`;

export const ContentButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 16px;
`;
