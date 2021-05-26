import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface IToast {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<IToast>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  & + div {
    margin-top: 8px;
  }
  ${({ type }: IToast) => toastTypeVariations[type || 'info']};
  > svg {
    margin: 2px 12px 0px 0px;
  }
  div {
    flex: 1;
    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }
  button {
    position: absolute;
    right: 8px;
    top: 16px;
    opacity: 0.6;
    background: transparent;
    border: 0;
    color: inherit;
  }
  ${({ hasDescription }) =>
    !hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0px;
      }
    `}
`;
