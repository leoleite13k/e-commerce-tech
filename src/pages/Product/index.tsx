import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

import { Container, Wrapper, Portatil } from './styles';

import { dataProduct, IDataProduct } from '../../data';

const Product: React.FC = () => {
  const [product, setProduct] = useState<IDataProduct | undefined>(undefined);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setProduct(dataProduct.find(prod => prod.id === id));
  }, [id]);

  return (
    <Container>
      <Wrapper>
        <Portatil>
          <img src={product?.foto} alt="produto" />
          <button type="button">
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
