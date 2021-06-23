import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { usePurchase } from '../../hooks/purchase';

import { Container, Content, Card, Product, Total } from './styles';

const Home: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { purchase, getPurchase } = usePurchase();

  useEffect(() => {
    getPurchase(Number(id));
  }, [getPurchase, id]);

  return (
    <Container>
      <Content>
        <Card className="card">
          <h3>{`Compra: #${purchase?.id}`}</h3>

          {purchase?.produtos.map(product => (
            <Product key={product.id}>
              <div>
                <img src={product?.foto} alt="produto" />
              </div>
              <div>
                <span>{`${product.nome} ${
                  product.quantidade > 1 ? `x ${product.quantidade}` : ''
                }`}</span>
              </div>
              <div>
                <strong>{`R$ ${product.preco}`}</strong>
              </div>
            </Product>
          ))}
        </Card>

        <Total>
          <div>
            <span>Quantidade</span>
            <strong>
              {purchase?.produtos.reduce(
                (accumulator, product) => accumulator + product.quantidade,
                0,
              )}
            </strong>
          </div>
          <div>
            <span>Frete</span>
            <strong>{`R$ ${purchase?.frete}`}</strong>
          </div>
          <div>
            <span>Total</span>
            <strong>{`R$ ${purchase?.total}`}</strong>
          </div>
        </Total>
      </Content>
    </Container>
  );
};

export default Home;
