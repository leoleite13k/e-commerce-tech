/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../services/api';
import { useToast } from './toast';

interface IProduct {
  id: number;
  id_usuario: number;
  nome: string;
  preco: number;
  foto: string;
  quantidade: number;
  descricao: string;
  promocao: boolean;
}

export interface IInputProduct {
  id?: number;
  name: string;
  price: number;
  photo?: string;
  qtd: number;
  description?: string;
  idPromotion: boolean;
}

interface IProductState {
  products: IProduct[];
  product?: IProduct;
}

interface IProductContextData {
  products: IProduct[];
  product?: IProduct;
  loading: boolean;
  getProducts(idUser?: number): Promise<void>;
  getProduct(id: number): Promise<void>;
  addProduct(product: IInputProduct): Promise<void>;
  updateProduct(product: IInputProduct): Promise<void>;
  deleteProduct(id: number): Promise<void>;
}

const ProductContext = createContext<IProductContextData>(
  {} as IProductContextData,
);

const ProductProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IProductState>({
    products: [],
  } as IProductState);
  const [loading, setLoading] = useState<boolean>(false);

  const history = useHistory();
  const { addToast } = useToast();

  const getProducts = useCallback(async (idUser: number) => {
    setLoading(true);

    let response = null;

    if (idUser) {
      response = await api.get(`produto?id_usuario=${idUser}`);
    } else {
      response = await api.get('produto');
    }

    setData({ products: response.data });

    setLoading(false);
  }, []);

  const getProduct = useCallback(async (id: number) => {
    setLoading(true);

    const response = await api.get(`produto/${id}`);

    setData(oldState => ({
      products: oldState.products,
      product: response.data,
    }));

    setLoading(false);
  }, []);

  const addProduct = useCallback(
    async ({ name, price, photo, qtd, description, isPromotion }) => {
      setLoading(true);

      const user = JSON.parse(
        localStorage.getItem('@eCommerceTech:user') || '',
      );

      const response = await api.post('produto', {
        id_usuario: user.id,
        nome: name,
        preco: price,
        foto: photo,
        quantidade: qtd,
        descricao: description,
        promocao: isPromotion,
      });

      setData(oldState => ({
        products: oldState.products,
        product: response.data,
      }));

      addToast({
        title: 'Produto cadastrado',
        description: 'Produto cadastrado com sucesso!',
        type: 'success',
      });
      setLoading(false);
      history.push('/admin');
    },
    [addToast, history],
  );

  const updateProduct = useCallback(
    async ({ id, name, price, photo, qtd, description, isPromotion }) => {
      setLoading(true);

      const user = JSON.parse(
        localStorage.getItem('@eCommerceTech:user') || '',
      );

      const response = await api.put(`produto/${id}`, {
        id_usuario: user.id,
        nome: name,
        preco: price,
        foto: photo,
        quantidade: qtd,
        descricao: description,
        promocao: isPromotion,
      });

      setData(oldState => ({
        products: oldState.products,
        product: response.data,
      }));

      addToast({
        title: 'Produto atualizado',
        description: 'Produto atualizado com sucesso!',
        type: 'success',
      });
      setLoading(false);
      history.push('/admin');
    },
    [addToast, history],
  );

  const deleteProduct = useCallback(
    async (id: number) => {
      setLoading(true);

      await api.delete(`produto/${id}`);

      setData({ products: data.products.filter(product => product.id !== id) });

      addToast({
        title: 'Produto deletado',
        description: 'Produto deleteado com sucesso!',
        type: 'success',
      });

      setLoading(false);
    },
    [addToast, data.products],
  );

  return (
    <ProductContext.Provider
      value={{
        products: data.products,
        product: data.product,
        loading,
        getProducts,
        getProduct,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

function useProduct(): IProductContextData {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProduct must be used within an ProductProvider');
  }

  return context;
}

export { ProductProvider, useProduct };
