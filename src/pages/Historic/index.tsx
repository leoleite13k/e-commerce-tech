import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { usePurchase } from '../../hooks/purchase';

import { Container, Content, Card } from './styles';

const Historic: React.FC = () => {
  const history = useHistory();
  const { historic, loading, getPurchases } = usePurchase();

  useEffect(() => {
    const user = localStorage.getItem('@eCommerceTech:user') || '';
    getPurchases(JSON.parse(user).id);
  }, [getPurchases]);

  return (
    <Container>
      <Content>
        {!loading && historic.length === 0 ? (
          <h1>Nenhuma compra encontrada</h1>
        ) : (
          historic.map(purchase => (
            <Card className="card">
              <div>
                <h3>{`Compra: #${purchase.id}`}</h3>

                {purchase.produtos.map(product => (
                  <span>{`${product.nome} ${
                    product.quantidade > 1 ? `x ${product.quantidade}` : ''
                  }`}</span>
                ))}
              </div>
              <div>
                <strong>R$ {purchase.frete + purchase.total}</strong>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => history.push(`/purchase/${purchase.id}`)}
                >
                  Ver detalhes
                </button>
              </div>
            </Card>
          ))
        )}
      </Content>
    </Container>
  );
};

export default Historic;
