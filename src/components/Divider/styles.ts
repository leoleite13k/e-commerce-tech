import styled, { css } from 'styled-components';

import { IDivider } from './index';

export const Container = styled.div<IDivider>`
  height: ${({ heightCoponent, widthComponent, horizontal }) => horizontal ? widthComponent : heightCoponent};
  width: ${({ heightCoponent, widthComponent, horizontal }) => horizontal ? heightCoponent : widthComponent};
  background-color: #eee;

  ${({ horizontal }) => horizontal && css`
    transform: rotate(120)
  `};
`;
