import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiUser, FiKey } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';

import InputIcon from '../../components/Input/InputIcon';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';

import { Container, ContentButton } from './styles';

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const history = useHistory();

  return (
    <Container>
      <form>
        <h1>Cadastro</h1>
        <InputIcon
          placeholder="Nome"
          value={name}
          setValue={setName}
          icon={() => <FiUser size={20} />}
        />
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
        <InputIcon
          placeholder="Confirmar senha"
          type="password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          icon={() => (
            <FiKey size={20} style={{ transform: 'rotate(90deg)' }} />
          )}
        />
        <CheckBox label="Administrador" />

        <ContentButton>
          <Button type="submit">Cadastrar</Button>
          <Button
            secondary
            type="button"
            onClick={() => history.push('/signin')}
          >
            Voltar
          </Button>
        </ContentButton>
      </form>
    </Container>
  );
};

export default SignUp;
