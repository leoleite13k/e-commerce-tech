import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { VscTrash } from 'react-icons/vsc';
import { AiFillEdit } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';

import { useProduct } from '../../../hooks/product';

import {
  Container,
  Add,
  Content,
  Card,
  Portatil,
  Column,
  Counter,
  Row,
} from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  const { products, loading, getProducts, deleteProduct } = useProduct();

  useEffect(() => {
    const user = localStorage.getItem('@eCommerceTech:user') || '';
    getProducts(JSON.parse(user).id);
  }, [getProducts]);

  return (
    <Container>
      <Content>
        {!loading && products.length === 0 ? (
          <h1>Nenhum produto cadastrado</h1>
        ) : (
          products.map(product => (
            <Card className="card" key={product.id}>
              <Portatil>
                <img src={product.foto} alt="produto" />
                <span>{product.nome}</span>
              </Portatil>

              <Column>
                <strong>{`R$ ${product.preco.toLocaleString()}`}</strong>
              </Column>
              <Counter>
                <strong>{product.quantidade}</strong>
              </Counter>
              <Row>
                <button type="button" onClick={() => deleteProduct(product.id)}>
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
          ))
        )}
      </Content>

      <Add type="button" onClick={() => history.push('/admin/product')}>
        <FiPlus size={25} color="#eee" />
      </Add>
    </Container>
  );
};

export default Home;
