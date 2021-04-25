import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

import { Container, Header } from './styles';

const Default: React.FC = ({ children }) => {
  const historic = useHistory();

  return (
    <Container>
      <Header>
        <div />
        <div />
        <div>
          <button type="button" onClick={() => historic.push('/card')}>
            <FiShoppingCart size={24} color='#eee' />
          </button>
        </div>
      </Header>
      {children}
    </Container>
  );
}

export default Default;