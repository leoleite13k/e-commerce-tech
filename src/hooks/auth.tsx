/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import { useToast } from './toast';

interface IUser {
  id: number;
  email: string;
  nome: string;
  administrador: boolean;
}

interface IAuthState {
  user: IUser;
}

interface ISignInCredentials {
  email: string;
  password: string;
  isAdministrator: boolean;
}

interface ISignUpCredentials {
  name: string;
  email: string;
  password: string;
  isAdministrator: boolean;
}

interface IAuthContextData {
  user: IUser;
  loading: boolean;
  error: boolean;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signUp(credentials: ISignUpCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const user = localStorage.getItem('@eCommerceTech:user');

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const { addToast } = useToast();

  const signIn = useCallback(
    async ({ email, password, isAdministrator }) => {
      setLoading(true);
      setError(false);

      const response = await api.post('login', {
        email,
        senha: password,
        administrador: isAdministrator,
      });

      if (response.data) {
        const user = { ...response.data, administrador: isAdministrator };

        localStorage.setItem('@eCommerceTech:user', JSON.stringify(user));

        setData({ user });
        setLoading(false);
        return;
      }

      setError(true);
      setLoading(false);
      addToast({
        title: 'Erro de acesso',
        description: 'Usuário ou senha incorreto',
        type: 'error',
      });
    },
    [addToast],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@eCommerceTech:user');

    setData({} as IAuthState);
  }, []);

  const signUp = useCallback(
    async ({ name, email, password, isAdministrator }) => {
      setLoading(true);
      const response = await api.post('usuario', {
        nome: name,
        email,
        senha: password,
        administrador: isAdministrator,
      });

      const user = { ...response.data, administrador: isAdministrator };

      localStorage.setItem('@eCommerceTech:user', JSON.stringify(user));

      setData({ user });

      addToast({
        title: 'Acesso criado',
        description: 'Usuário criado com sucesso!',
        type: 'success',
      });
      setLoading(false);
    },
    [addToast],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, loading, error, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
