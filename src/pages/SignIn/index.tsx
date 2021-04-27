import React, { useState } from 'react';
import { FiUser, FiKey } from 'react-icons/fi';

import Button from '../../components/Button';
import InputIcon from '../../components/Input/InputIcon';

import { Container, Content, ContentButton } from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Container>
      <Content>
        <h1>Login</h1>
        <InputIcon
          value={email}
          setValue={setEmail}
          icon={() => <FiUser size={20} />}
        />
        <InputIcon
          type="password"
          value={password}
          setValue={setPassword}
          icon={() => (
            <FiKey size={20} style={{ transform: 'rotate(90deg)' }} />
          )}
        />

        <ContentButton>
          <Button type="submit">Entrar</Button>
          <Button type="button" secondary>
            Criar conta
          </Button>
        </ContentButton>
      </Content>
    </Container>
  );
};

export default SignIn;
