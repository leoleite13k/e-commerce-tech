import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { MAX_WIDTH_SMALL } from '../../utils/contants';

interface IContainer {
  isOpen: boolean;
  widthComponent: string;
}

interface IButton {
  widthComponent: string;
  isOpen: boolean;
}

interface IItem {
  isSelected: boolean;
}

export const Container = styled.div<IContainer>`
  height: 100%;
  width: 100%;
  max-width: ${({ widthComponent }) => widthComponent};

  ul {
    position: absolute;
    margin-top: 2px;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    z-index: 3;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    max-height: 215px;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    max-width: calc(${({ widthComponent }) => widthComponent} - 22px);
    -webkit-box-shadow: 0px 10px 34px 5px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 10px 34px 5px rgba(0, 0, 0, 0.4);
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

    @media (max-width: ${MAX_WIDTH_SMALL}px) {
      max-width: 120px;
    }
  }

  @media (max-width: ${MAX_WIDTH_SMALL}px) {
    max-width: 140px;
  }
`;

export const Button = styled.button<IButton>`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #393e46;
  color: #eee;
  padding-right: 14px;
  padding-left: 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    transition: transform 0.6s;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

export const Item = styled.ol<IItem>`
  background-color: #00adb5;

  > button {
    padding: 12px;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    background-color: ${({ isSelected }) =>
      isSelected ? '#00adb5' : '#393e46'};
    border: none;
    color: ${({ isSelected }) => (isSelected ? '#393e46' : '#eee')};
    ${({ isSelected }) =>
      isSelected &&
      css`
        margin-left: 4px;
      `}

    transition: margin .4s;

    &:hover {
      margin-left: 4px;
      background-color: ${({ isSelected }) =>
        isSelected ? lighten(0.02, '#00adb5') : lighten(0.02, '#393e46')};
    }
  }
`;
