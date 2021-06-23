/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { useCard } from './card';

import api from '../services/api';

interface IProduct {
  id: number;
  nome: string;
  preco: number;
  foto?: string;
}

interface IPurchase {
  id?: number;
  id_usuario?: number;
  frete: number;
  total: number;
  produtos: IProduct[];
}

interface IPurchaseState {
  historic: IPurchase[];
  purchase?: IPurchase;
}

interface IPurchaseContextData {
  historic: IPurchase[];
  purchase?: IPurchase;
  loading: boolean;
  getPurchases(idUser?: number): Promise<void>;
  getPurchase(id: number): Promise<void>;
  addPurchase(purchase: IPurchase): Promise<void>;
}

const PurchaseContext = createContext<IPurchaseContextData>(
  {} as IPurchaseContextData,
);

const PurchaseProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IPurchaseState>({
    historic: [],
  } as IPurchaseState);
  const [loading, setLoading] = useState<boolean>(false);

  const history = useHistory();
  const { clearCard } = useCard();

  const getPurchases = useCallback(async (idUser?: number) => {
    setLoading(true);

    const response = await api.get(`compra?id_usuario=${idUser}`);

    setData({ historic: response.data });

    setLoading(false);
  }, []);

  const getPurchase = useCallback(async (id: number) => {
    setLoading(true);

    const response = await api.get(`compra/${id}`);

    setData(oldState => ({
      historic: oldState.historic,
      purchase: response.data,
    }));

    setLoading(false);
  }, []);

  const addPurchase = useCallback(
    async ({ frete, total, produtos }) => {
      setLoading(true);

      const user = JSON.parse(
        localStorage.getItem('@eCommerceTech:user') || '',
      );

      const response = await api.post('compra', {
        id_usuario: user.id,
        frete,
        total,
        compraProdutos: produtos.map((product: IProduct) => ({
          id_produto: product.id,
          preco: product.preco,
        })),
      });

      setData(oldState => ({
        historic: oldState.historic,
        purchase: response.data,
      }));
      setLoading(false);
      history.push('/purchase');
      clearCard();
    },
    [clearCard, history],
  );

  return (
    <PurchaseContext.Provider
      value={{
        historic: data.historic,
        purchase: data.purchase,
        loading,
        getPurchases,
        getPurchase,
        addPurchase,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

function usePurchase(): IPurchaseContextData {
  const context = useContext(PurchaseContext);

  if (!context) {
    throw new Error('usePurchase must be used within an PurchaseProvider');
  }

  return context;
}

export { PurchaseProvider, usePurchase };
