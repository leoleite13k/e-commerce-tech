import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { BiExit } from 'react-icons/bi';
import { AiOutlineUnorderedList, AiOutlineHome } from 'react-icons/ai';

import { useCard } from '../../../hooks/card';
import { useAuth } from '../../../hooks/auth';

import { Container, Header, Counter } from './styles';

const Default: React.FC = ({ children }) => {
  const history = useHistory();
  const { data } = useCard();
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Header>
        <div>
          <button type="button" onClick={() => history.push('/')}>
            <AiOutlineHome size={24} color="#eee" />
          </button>
        </div>
        <div />
        <div>
          <button type="button" onClick={() => history.push('/historic')}>
            <AiOutlineUnorderedList size={24} color="#eee" />
          </button>
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
          {!!user && (
            <button
              type="button"
              onClick={() => {
                signOut();
                history.push('/signin');
              }}
            >
              <BiExit size={24} color="#eee" />
            </button>
          )}
        </div>
      </Header>
      {children}
    </Container>
  );
};

export default Default;
