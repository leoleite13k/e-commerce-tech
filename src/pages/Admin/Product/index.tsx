import React, { useState } from 'react';
import Button from '../../../components/Button';
import CheckBox from '../../../components/CheckBox';

import Input from '../../../components/Input';

import { Container, ContentInput } from './styles';

const Product: React.FC = () => {
  const [nome, setNome] = useState<string>('');

  return (
    <Container>
      <form>
        <ContentInput>
          <Input placeholder="Nome" value={nome} setValue={setNome} />
          <Input placeholder="Preço" value={nome} setValue={setNome} />
          <Input placeholder="Foto" value={nome} setValue={setNome} />
          <Input placeholder="Quantidade" value={nome} setValue={setNome} />
          <Input placeholder="Descrição" value={nome} setValue={setNome} />
        </ContentInput>
        <CheckBox label="Promoção" />

        <Button type="submit">Cadastrar</Button>
      </form>
    </Container>
  );
};

export default Product;
