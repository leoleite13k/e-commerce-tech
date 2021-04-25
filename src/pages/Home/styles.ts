import styled from 'styled-components';
import { MAX_WIDTH_MEDIUM } from '../../utils/contants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${MAX_WIDTH_MEDIUM}px;
  height: 36px;
  margin: 32px 0px;
  border-radius: 36px;
  overflow: hidden;
  background-color: #393e46;
  padding: 2px 0px 2px 14px;
`;

export const Content = styled.div`
  display: flex;
  flex: 0 1 n;
  flex-wrap: wrap;
  max-width: ${MAX_WIDTH_MEDIUM + 16}px;
  justify-content: center;
`;

export const Card = styled.button`
  position: relative;
  height: ${MAX_WIDTH_MEDIUM / 4}px;
  width: ${MAX_WIDTH_MEDIUM / 4}px;
  margin: 16px;
  padding: 12px 8px;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  color: #eee;
  -webkit-box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
  box-shadow: 0px 0px 4px 3px rgba(0,0,0,0.1);
  transition: transform .6s;

  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;

  &:hover {
    transform: scale(1.12);
  }

  svg {
    position: absolute;
    top: -2px;
    left: -12px;

    transform: rotate(84deg)
  }

  img {
    flex: 1;
    object-fit: contain;
    height: 60%;
    width: 100%;
  }

  strong {
    margin-top: 8px;
    font-weight: bold;
  }

  span {
    margin-top: 2px;
    text-align: left;
  }
`;
