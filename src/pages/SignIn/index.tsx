import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiKey } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import InputIcon from '../../components/Input';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

import { Container, ContentCheckBox, ContentButton } from './styles';

const schema = Yup.object().shape({
  email: Yup.string().required('Informe o e-mail'),
  password: Yup.string().required('Informe uma senha'),
  administrador: Yup.bool(),
});

const SignIn: React.FC = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { email, password } = watch();
  const { signIn, loading, error } = useAuth();

  return (
    <Container>
      <form onSubmit={handleSubmit(signIn)}>
        <h1>Login</h1>
        <InputIcon
          placeholder="E-mail"
          name="email"
          register={register}
          value={email}
          setValue={setValue}
          error={errors?.email || error ? { message: '' } : undefined}
          icon={() => <AiOutlineMail size={20} />}
        />
        <InputIcon
          placeholder="Senha"
          type="password"
          name="password"
          register={register}
          value={password}
          setValue={setValue}
          error={errors?.password || error ? { message: '' } : undefined}
          icon={() => (
            <FiKey size={20} style={{ transform: 'rotate(90deg)' }} />
          )}
        />

        <ContentCheckBox>
          <CheckBox
            label="Entrar como administrador"
            name="isAdministrator"
            register={register}
          />
        </ContentCheckBox>

        <ContentButton>
          <Button type="submit" isLoading={loading}>
            Entrar
          </Button>
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
