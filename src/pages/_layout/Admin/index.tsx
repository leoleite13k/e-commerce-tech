import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { BsArrowLeft } from 'react-icons/bs';

import { useCard } from '../../../hooks/card';

import { Container, Header } from './styles';

const Admin: React.FC = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

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
        <div />
      </Header>
      {children}
    </Container>
  );
};

export default Admin;
