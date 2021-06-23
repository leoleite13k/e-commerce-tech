import React, { useCallback } from 'react';
import { FaTag } from 'react-icons/fa';
import { VscTrash } from 'react-icons/vsc';

import { useCard } from '../../hooks/card';
import { usePurchase } from '../../hooks/purchase';

import { Container, Empty, Content, Total } from './styles';

const Card: React.FC = () => {
  const {
    data,
    incrementCard,
    decrementCard,
    changeValueProduct,
    removeCard,
  } = useCard();
  const { addPurchase } = usePurchase();

  const handleChangeValueProduct = useCallback(
    (event, id) => {
      const { value } = event.currentTarget;

      changeValueProduct({ id, value: value ? Number(value) : 0 });
    },
    [changeValueProduct],
  );

  const handleBuy = useCallback(async () => {
    await addPurchase({
      frete: data.frete || 0,
      total: Number(
        data.products
          .reduce(
            (accumulator, product) =>
              accumulator + product.quantidade * product.preco,
            0,
          )
          .toFixed(2),
      ),
      produtos: data.products,
    });
  }, [addPurchase, data.frete, data.products]);

  return (
    <Container>
      {!data.products || data.products.length === 0 ? (
        <Empty>
          <h1>Não tem nenhum produto no carrinho</h1>
        </Empty>
      ) : (
        <>
          {data.products.map(product => (
            <Content>
              <div>
                {product.promocao && <FaTag color="#00adb5" size={20} />}
                <img src={product.foto} alt="produto" />
                <strong>{product.nome}</strong>
              </div>
              <div>
                <div />
                <div>
                  <button type="button" onClick={() => incrementCard(product)}>
                    +
                  </button>
                  <input
                    type="text"
                    value={product.quantidade}
                    onChange={event =>
                      handleChangeValueProduct(event, product.id)
                    }
                  />
                  <button type="button" onClick={() => decrementCard(product)}>
                    -
                  </button>
                </div>
                <button type="button" onClick={() => removeCard(product)}>
                  <VscTrash size={26} color="#f00" />
                </button>
              </div>
              <div>
                <strong>{`R$ ${(product.quantidade * product.preco).toFixed(
                  2,
                )}`}</strong>
              </div>
            </Content>
          ))}

          <Total>
            <div>
              <button type="button" onClick={handleBuy}>
                Finalizar compra
              </button>
            </div>
            <div>
              <span>Quantidade</span>
              <strong>
                {data.products.reduce(
                  (accumulator, product) => accumulator + product.quantidade,
                  0,
                )}
              </strong>
            </div>
            <div>
              <span>Total</span>
              <strong>{`R$ ${data.products
                .reduce(
                  (accumulator, product) =>
                    accumulator + product.quantidade * product.preco,
                  0,
                )
                .toFixed(2)}`}</strong>
            </div>
          </Total>
        </>
      )}
    </Container>
  );
};

export default Card;
