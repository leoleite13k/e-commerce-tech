import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

import { useProduct } from '../../hooks/product';
import { useCard } from '../../hooks/card';

import { Container, Wrapper, Portatil } from './styles';
import Loader from '../../components/Loader';

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, getProduct, loading } = useProduct();
  const { addCard } = useCard();

  useEffect(() => {
    getProduct(Number(id));
  }, [getProduct, id]);

  return (
    <Container>
      <Wrapper>
        {loading ? (
          <Loader height="80px" />
        ) : (
          <>
            <Portatil>
              <img src={product?.foto} alt="produto" />
              <button
                type="button"
                onClick={() => {
                  if (product) {
                    addCard(product);
                  }
                }}
              >
                +
                <FiShoppingCart size={18} color="#393e46" />
              </button>
              <h1>{product?.nome}</h1>
              <div>
                <strong>{`R$ ${product?.preco}`}</strong>
                <strong>{`Qtd: ${product?.quantidade}`}</strong>
              </div>
            </Portatil>

            <div>
              <h3>Descrição</h3>
              <span>{product?.descricao}</span>
            </div>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Product;
