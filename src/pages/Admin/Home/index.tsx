import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { VscTrash } from 'react-icons/vsc';
import { AiFillEdit } from 'react-icons/ai';

import {
  Container,
  Content,
  Card,
  Portatil,
  Column,
  Counter,
  Row,
} from './styles';

import { dataProduct } from '../../../data';

const Home: React.FC = () => {
  const history = useHistory();

  const handleChangeValueProduct = useCallback((event, id) => {
    const { value } = event.currentTarget;
  }, []);

  return (
    <Container>
      <Content>
        {dataProduct.map(product => (
          <Card className="card" key={product.id}>
            <Portatil>
              <img src={product.foto} alt="produto" />
              <span>{product.nome}</span>
            </Portatil>

            <Column>
              <strong>{`R$ ${product.preco.toLocaleString()}`}</strong>
            </Column>
            <Counter>
              <button type="button" onClick={() => null}>
                +
              </button>
              <input
                type="text"
                value={product.quantidade}
                onChange={event => handleChangeValueProduct(event, product.id)}
              />
              <button type="button" onClick={() => null}>
                -
              </button>
            </Counter>
            <Row>
              <button type="button">
                <VscTrash size={26} color="#f00" />
              </button>
              <button
                type="button"
                onClick={() => history.push(`/admin/product/${product.id}`)}
              >
                <AiFillEdit size={26} color="#00adb5" />
              </button>
            </Row>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export default Home;
