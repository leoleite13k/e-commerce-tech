import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { BsArrowLeft } from 'react-icons/bs';

import { Container, Header, Counter } from './styles';

const Default: React.FC = ({ children }) => {
  const historic = useHistory();
  const location = useLocation();

  return (
    <Container>
      <Header>
        <div>
          {location.key && (
            <button type="button" onClick={() => historic.goBack()}>
              <BsArrowLeft size={24} color="#eee" />
            </button>
          )}
        </div>
        <div />
        <div>
          <button type="button" onClick={() => historic.push('/card')}>
            <FiShoppingCart size={24} color="#eee" />
            <Counter>
              <span>100</span>
            </Counter>
          </button>
        </div>
      </Header>
      {children}
    </Container>
  );
};

export default Default;
