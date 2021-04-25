import styled, { css } from 'styled-components';
import { lighten } from 'polished';

interface IContainer {
  isOpen: boolean;
  widthComponent: string;
}

interface IButton {
  widthComponent: string;
}

interface IItem {
  isSelected: boolean;
}

export const Container = styled.div<IContainer>`
  /* position: relative; */

  ul {
    position: absolute;
    margin-top: 6px;
    display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
    z-index: 5;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    max-height: 215px;
    width: ${({ widthComponent }) => widthComponent};
    overflow-y: auto;
    overflow-x: hidden;
    width: calc(${({ widthComponent }) => widthComponent} - 22px);
    -webkit-box-shadow: 0px 10px 34px 5px rgba(0,0,0,0.4);
    box-shadow: 0px 10px 34px 5px rgba(0,0,0,0.4);
    background-color: #00adb5;


    /* width */
    ::-webkit-scrollbar {
      width: 2px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #393e46;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #222831;
      /* border-radius: 20px; */
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${lighten(0.05, '#393e46')};
    }
  }
`;

export const Button = styled.button<IButton>`
  width: ${({ widthComponent }) => widthComponent};
  height: 100%;
  border: none;
  background-color: #393e46;
  color: #eee;
  padding-right: 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Item = styled.ol<IItem>`
  background-color: #00adb5;

  > button {
    padding: 12px;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    background-color: ${({ isSelected }) => isSelected ? '#00adb5' : '#393e46'};
    border: none;
    color: ${({ isSelected }) => isSelected ? '#393e46' : '#eee'};
    ${({ isSelected }) => isSelected && css`
      margin-left: 4px;
    `}

    transition: margin .4s;

    &:hover {
      margin-left: 4px;
      background-color: ${({ isSelected }) => isSelected ? lighten(0.02, '#00adb5') : lighten(0.02, '#393e46')};
    }
  }
`;
