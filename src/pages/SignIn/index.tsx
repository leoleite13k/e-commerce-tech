import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiKey } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';

import Button from '../../components/Button';
import InputIcon from '../../components/Input/InputIcon';

import { Container, ContentButton } from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const history = useHistory();

  return (
    <Container>
      <form>
        <h1>Login</h1>
        <InputIcon
          placeholder="E-mail"
          value={email}
          setValue={setEmail}
          icon={() => <AiOutlineMail size={20} />}
        />
        <InputIcon
          placeholder="Senha"
          type="password"
          value={password}
          setValue={setPassword}
          icon={() => (
            <FiKey size={20} style={{ transform: 'rotate(90deg)' }} />
          )}
        />

        <ContentButton>
          <Button type="submit">Entrar</Button>
          <Button
            secondary
            type="button"
            onClick={() => history.push('/signup')}
          >
            Criar conta
          </Button>
        </ContentButton>
      </form>
    </Container>
  );
};

export default SignIn;
