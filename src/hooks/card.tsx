import React, { createContext, useCallback, useState, useContext } from 'react';

export interface IProductCard {
  id: number;
  nome: string;
  preco: number;
  foto?: string;
  quantidade: number;
  descricao?: string;
  promocao: boolean;
}

interface ICardState {
  frete: number;
  products: IProductCard[];
}

interface ICardContextData {
  data: ICardState;
  incrementCard(product: IProductCard): void;
  decrementCard(product: IProductCard): void;
  changeValueProduct({ id, value }: { id: number; value: number }): void;
  addCard(product: IProductCard): void;
  removeCard(product: IProductCard): void;
  clearCard(): void;
}

const CardContext = createContext<ICardContextData>({} as ICardContextData);

const CardProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ICardState>(() => {
    const card = localStorage.getItem('@eCommerceTech:card');

    if (card) {
      return JSON.parse(card);
    }

    return {} as ICardState;
  });

  const incrementCard = useCallback(
    ({ id }) => {
      const newData = {
        ...data,
        products: data.products.map(product => {
          if (product.id === id) {
            return {
              ...product,
              quantidade: product.quantidade + 1,
            };
          }

          return product;
        }),
      };

      localStorage.setItem('@eCommerceTech:card', JSON.stringify(newData));
      setData(newData);
    },
    [data],
  );

  const decrementCard = useCallback(
    ({ id }) => {
      const newData = {
        ...data,
        products: data.products.map(product => {
          if (product.id === id && product.quantidade > 1) {
            return {
              ...product,
              quantidade: product.quantidade - 1,
            };
          }

          return product;
        }),
      };

      localStorage.setItem('@eCommerceTech:card', JSON.stringify(newData));
      setData(newData);
    },
    [data],
  );

  const addCard = useCallback(
    product => {
      let newData = {
        ...data,
        products: [{ ...product, quantidade: 1 }],
      };

      if (data.products) {
        if (data.products.find(item => item.id === product.id)) {
          incrementCard(product);
          return;
        }

        newData = {
          ...data,
          products: [...data.products, { ...product, quantidade: 1 }],
        };
      }

      localStorage.setItem('@eCommerceTech:card', JSON.stringify(newData));
      setData(newData);
    },
    [data, incrementCard],
  );

  const removeCard = useCallback(
    ({ id }) => {
      const newData = {
        ...data,
        products: data.products.filter(item => item.id !== id),
      };

      localStorage.setItem('@eCommerceTech:card', JSON.stringify(newData));
      setData(newData);
    },
    [data],
  );

  const clearCard = useCallback(() => {
    localStorage.removeItem('@eCommerceTech:card');

    setData({} as ICardState);
  }, []);

  const changeValueProduct = useCallback(
    ({ id, value }) => {
      const newData = {
        ...data,
        products: data.products.map(product => {
          if (product.id === id) {
            return {
              ...product,
              quantidade: value,
            };
          }

          return product;
        }),
      };

      localStorage.setItem('@eCommerceTech:card', JSON.stringify(newData));
      setData(newData);
    },
    [data],
  );

  return (
    <CardContext.Provider
      value={{
        data,
        incrementCard,
        decrementCard,
        changeValueProduct,
        addCard,
        removeCard,
        clearCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

function useCard(): ICardContextData {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('useCard must be used within an CardProvider');
  }

  return context;
}

export { CardProvider, useCard };
