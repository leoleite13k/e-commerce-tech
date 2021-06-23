import React from 'react';
import { BiExit } from 'react-icons/bi';

import { useAuth } from '../../../hooks/auth';

import { Container, Header } from './styles';

const Admin: React.FC = ({ children }) => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Header>
        <div />
        <div />
        <div>
          <button type="button" onClick={signOut}>
            <BiExit size={24} color="#eee" />
          </button>
        </div>
      </Header>
      {children}
    </Container>
  );
};

export default Admin;
