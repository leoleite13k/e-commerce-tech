import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { BsArrowLeft } from 'react-icons/bs';

import { useCard } from '../../../hooks/card';

import { Container, Header, Counter } from './styles';

const Default: React.FC = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const { data } = useCard();

  return (
    <Container>
      <Header>
        <div>
          {location.key && (
            <button type="button" onClick={() => history.goBack()}>
              <BsArrowLeft size={24} color="#eee" />
            </button>
          )}
        </div>
        <div />
        <div>
          <button type="button" onClick={() => history.push('/card')}>
            <FiShoppingCart size={24} color="#eee" />
            <Counter>
              <span>
                {data.products.reduce(
                  (accumulador, product) => accumulador + product.quantidade,
                  0,
                )}
              </span>
            </Counter>
          </button>
        </div>
      </Header>
      {children}
    </Container>
  );
};

export default Default;
