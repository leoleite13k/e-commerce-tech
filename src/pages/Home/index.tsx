/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { FaTag } from 'react-icons/fa';

import { useCard } from '../../hooks/card';
import Input from '../../components/Input';

import { Container, SearchBar, Content, Card, Footer } from './styles';

import { dataProduct } from '../../data';

const Home: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const history = useHistory();
  const { addCard } = useCard();

  return (
    <Container>
      <SearchBar>
        <FiSearch size={22} color="#eee" />
        <Input value={searchInput} setValue={setSearchInput} />
      </SearchBar>

      <Content>
        {dataProduct.map(product => (
          <Card
            className="card"
            key={product.id}
            type="button"
            onClick={() => history.push(`/product/${product.id}`)}
          >
            {product.promocao && <FaTag color="#00adb5" size={20} />}
            <img src={product.foto} alt="produto" />

            <Footer>
              <div>
                <strong>{`R$ ${product.preco.toLocaleString()}`}</strong>
                <span>{product.nome}</span>
              </div>
              <button
                type="button"
                onClick={(event: any) => {
                  event.stopPropagation();
                  addCard(product);
                }}
              >
                +
                <FiShoppingCart size={18} color="#393e46" />
              </button>
            </Footer>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export default Home;
