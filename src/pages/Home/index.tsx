/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { FaTag } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useProduct } from '../../hooks/product';
import { useCard } from '../../hooks/card';
import Input from '../../components/Input';

import { Container, SearchBar, Content, Card, Footer } from './styles';

const schema = Yup.object().shape({
  search: Yup.string(),
});

const Home: React.FC = () => {
  const { register, handleSubmit, watch, setValue } = useForm({
    resolver: yupResolver(schema),
  });
  const { search } = watch();

  const history = useHistory();
  const { products, getProducts } = useProduct();
  const { addCard } = useCard();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Container>
      <SearchBar>
        <Input
          name="search"
          register={register}
          setValue={setValue}
          value={search}
          icon={() => <FiSearch size={22} color="#eee" />}
        />
      </SearchBar>

      <Content>
        {products.map(product => (
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
