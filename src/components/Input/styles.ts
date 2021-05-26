import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  padding-right: 27px;

  input {
    display: flex;
    flex: 1;
    border: none;
    color: #393e46;
    padding: 0px 8px;
    background-color: #393e46;
    color: #eee;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 8px;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;
