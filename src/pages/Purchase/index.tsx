import React from 'react';
import { useHistory } from 'react-router-dom';
import { HiCheckCircle } from 'react-icons/hi';

import { Container, Content } from './styles';

const Purchase: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <HiCheckCircle size={200} color="#0f0" />
        <span>Compra realizada com sucesso</span>

        <button type="button" onClick={() => history.push('/historic')}>
          Ver histórico
        </button>
        <button type="button" onClick={() => history.push('/')}>
          Voltar
        </button>
      </Content>
    </Container>
  );
};

export default Purchase;
