import React from 'react';
import { FaTag } from 'react-icons/fa';
import { VscTrash } from 'react-icons/vsc';

import { dataCard } from '../../data';

import { Container, Content, Total } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      {dataCard.itens.map(product => (
        <Content>
          <div>
            {product.promocao && <FaTag color="#00adb5" size={20} />}
            <img src={product.foto} alt="produto" />
            <strong>{product.nome}</strong>
          </div>
          <div>
            <div />
            <div>
              <button type="button">+</button>
              <input type="text" />
              <button type="button">-</button>
            </div>
            <button type="button">
              <VscTrash size={26} color="#f00" />
            </button>
          </div>
          <div>
            <strong>R$ 10.00</strong>
          </div>
        </Content>
      ))}

      <Total>
        <div>
          <button type="button">Finalizar compra</button>
        </div>
        <div>
          <span>Quantidade</span>
          <strong>100</strong>
        </div>
        <div>
          <span>Total</span>
          <strong>R$ 1000.00</strong>
        </div>
      </Total>
    </Container>
  );
};

export default Card;
