import styled from 'styled-components';

interface IContent {
  error: boolean;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;

  > span {
    position: absolute;
    bottom: -21px;
    left: 16px;
    color: #f00;
  }
`;

export const Content = styled.div<IContent>`
  position: relative;
  display: flex;
  align-items: center;
  height: 42px;
  padding: 8px;
  padding-right: 27px;
  margin-top: 12px;
  border: 1px solid ${({ error }) => (error ? '#f00' : '#393e46')};
  border-radius: 6px;
  background-color: #393e46;

  > input {
    display: flex;
    flex: 1;
    border: none;
    color: #393e46;
    padding: 0px 8px;
    background-color: #393e46;

    font-size: 16px;
    color: #eee;
    min-width: 50px;
  }

  > svg {
    margin-right: 8px;
  }

  > div {
    margin-right: 1px;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 8px;
  border: none;
  background-color: #393e46;
  display: flex;
  align-items: center;
  justify-content: center;
`;
