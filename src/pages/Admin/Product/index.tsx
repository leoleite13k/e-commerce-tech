import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useProduct, IInputProduct } from '../../../hooks/product';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import CheckBox from '../../../components/CheckBox';

import { Container, ContentInput } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Informe o nome'),
  price: Yup.number()
    .required('Informe o valor')
    .typeError('Insira um valor válido'),
  photo: Yup.string(),
  qtd: Yup.number()
    .required('Informe a quantidade')
    .typeError('Insira uma quantidade válida'),
  description: Yup.string(),
});

const Product: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { id } = useParams<{ id?: string }>();
  const { name, price, photo, qtd, description } = watch();

  const {
    product,
    loadingForm,
    updateProduct,
    addProduct,
    getProduct,
  } = useProduct();

  useEffect(() => {
    if (id) {
      getProduct(Number(id));
    }
  }, [getProduct, id]);

  useEffect(() => {
    if (product) {
      setValue('name', product?.nome);
      setValue('price', product?.preco);
      setValue('photo', product?.foto);
      setValue('qtd', product?.quantidade);
      setValue('description', product?.descricao);
      setValue('isPromotion', product?.promocao);
    }
  }, [product, setValue]);

  return (
    <Container>
      <form
        onSubmit={handleSubmit(async (data: IInputProduct) => {
          if (id) {
            await updateProduct({
              id: Number(id),
              ...data,
            });
            return;
          }

          await addProduct(data);
        })}
      >
        <ContentInput>
          <Input
            placeholder="Nome"
            name="name"
            register={register}
            setValue={setValue}
            value={name}
            error={errors.name}
          />
          <Input
            placeholder="Preço"
            name="price"
            register={register}
            setValue={setValue}
            value={price}
            error={errors.price}
          />
          <Input
            placeholder="Foto"
            name="photo"
            register={register}
            setValue={setValue}
            value={photo}
            error={errors.photo}
          />
          <Input
            placeholder="Quantidade"
            name="qtd"
            register={register}
            setValue={setValue}
            value={qtd}
            error={errors.qtd}
          />
          <Input
            placeholder="Descrição"
            name="description"
            register={register}
            setValue={setValue}
            value={description}
            error={errors.description}
          />
        </ContentInput>
        <CheckBox label="Promoção" name="isPromotion" register={register} />

        <Button type="submit" isLoading={loadingForm}>
          {id ? 'Alterar' : 'Cadastrar'}
        </Button>
      </form>
    </Container>
  );
};

export default Product;
