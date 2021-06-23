/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { FaTag } from 'react-icons/fa';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

import { useProduct } from '../../hooks/product';
import { useCard } from '../../hooks/card';
import InputSearch from '../../components/InputSearch';

import { Container, SearchBar, Content, Card, Footer } from './styles';

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const history = useHistory();
  const { products, getProducts } = useProduct();
  const { addCard } = useCard();

  const searchDebounced = AwesomeDebouncePromise(getProducts, 500);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async function searchProduct(text: string) {
    setIsLoading(true);
    setSearch(text);
    await searchDebounced(undefined, text);
    setIsLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Container>
      <SearchBar>
        <InputSearch
          handleOnChange={searchProduct}
          value={search}
          isLoading={isLoading}
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
                <strong>{`R$ ${product.preco}`}</strong>
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
