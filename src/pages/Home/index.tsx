import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import { FaTag } from 'react-icons/fa';

import Input from '../../components/Input';
import Divider from '../../components/Divider';
import DropDown from '../../components/DropDown';

import { Container, SearchBar, Content, Card } from './styles';

import { dataProduct } from '../../data';

const options = ['Todos', 'Computador', 'Monitor', 'Mouse', 'Acessorios']

const Home: React.FC = () => {
  const [option, setOption] = useState<string>('Todos');

  return (
    <Container>
      <SearchBar>
        <FiSearch size={22} color="#eee" />
        <Input />
        <Divider />
        <DropDown options={options} value={option} handleChange={(value) => setOption(value)} />
      </SearchBar>

      <Content>
        {dataProduct.map(product => (
          <Card type="button">
            {product.promocao && (
              <FaTag color="#00adb5" size={20} />
            )}
            <img src={product.foto} alt="produto"/>
            <strong>{`R$ ${product.preco.toLocaleString()}`}</strong>
            <span>{product.nome}</span>
          </Card>
        ))}
      </Content>
    </Container>
  );
}

export default Home;