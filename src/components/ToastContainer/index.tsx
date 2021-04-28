import React from 'react';
import { useTransition } from 'react-spring';

import { IToastMessage } from '../../hooks/toast';

import { Container } from './styles';
import Toast from './Toast';

interface IToastContainer {
  messages: IToastMessage[];
}

const ToastContainer: React.FC<IToastContainer> = ({ messages }) => {
  const messageWithTransitions = useTransition(messages, {
    keys: message => message.id,
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <Container>
      {messageWithTransitions((_, item, style) => (
        <Toast message={item} style={style} />
      ))}
    </Container>
  );
};

export default ToastContainer;
