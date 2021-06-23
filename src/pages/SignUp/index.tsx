import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiUser, FiKey } from 'react-icons/fi';
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
  name: Yup.string().required('Informe o nome'),
  email: Yup.string().required('Informe o e-mail'),
  password: Yup.string().required('Informe uma senha'),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref('password'), null],
      'Confirmação de senha diferente da senha',
    )
    .required('Confirme a senha'),
  administrador: Yup.bool(),
});

const SignUp: React.FC = () => {
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
  const { name, email, password, confirmPassword } = watch();
  const { signUp, loading } = useAuth();

  return (
    <Container>
      <form onSubmit={handleSubmit(signUp)}>
        <h1>Cadastro</h1>
        <InputIcon
          placeholder="Nome"
          name="name"
          register={register}
          value={name}
          setValue={setValue}
          error={errors?.name}
          icon={() => <FiUser size={20} />}
        />
        <InputIcon
          placeholder="E-mail"
          name="email"
          register={register}
          value={email}
          setValue={setValue}
          error={errors?.email}
          icon={() => <AiOutlineMail size={20} />}
        />
        <InputIcon
          placeholder="Senha"
          type="password"
          name="password"
          register={register}
          value={password}
          setValue={setValue}
          error={errors?.password}
          icon={() => (
            <FiKey size={20} style={{ transform: 'rotate(90deg)' }} />
          )}
        />
        <InputIcon
          placeholder="Confirmar senha"
          type="password"
          name="confirmPassword"
          register={register}
          value={confirmPassword}
          setValue={setValue}
          error={errors?.confirmPassword}
          icon={() => (
            <FiKey size={20} style={{ transform: 'rotate(90deg)' }} />
          )}
        />

        <ContentCheckBox>
          <CheckBox
            label="Sou administrador"
            name="isAdministrator"
            register={register}
          />
        </ContentCheckBox>

        <ContentButton>
          <Button type="submit" isLoading={loading}>
            Cadastrar
          </Button>
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
