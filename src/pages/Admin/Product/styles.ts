import styled from 'styled-components';
import { MAX_WIDTH_MEDIUM } from '../../../utils/contants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 36px;

  > form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${MAX_WIDTH_MEDIUM / 1.3}px;
    padding: 22px;

    -webkit-box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);

    > h1 {
      font-weight: bold;
      text-align: center;
      margin-bottom: 16px;
    }

    > button {
      margin-top: 32px;
    }
  }
`;

export const ContentInput = styled.div`
  > div {
    margin-bottom: 18px;
    padding-right: 0px;

    input {
      height: 40px;
    }
  }
`;
