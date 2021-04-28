import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

import { useCard, IProductCard } from '../../hooks/card';
import { dataProduct } from '../../data';

import { Container, Wrapper, Portatil } from './styles';

const Product: React.FC = () => {
  const [product, setProduct] = useState<IProductCard | undefined>(undefined);

  const { id } = useParams<{ id: string }>();
  const { addCard } = useCard();

  useEffect(() => {
    setProduct(dataProduct.find(item => item.id === Number(id)));
  }, [id]);

  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
    </Container>
  );
};

export default Product;
