import { v4 as uuidv4 } from 'uuid';

export interface IDataProduct {
  id: string;
  nome: string;
  preco: number;
  foto?: string;
  quantidade: number;
  descricao: string;
  promocao: boolean;
}

export interface IDataCard {
  frete: number;
  itens: {
    id: string;
    nome: string;
    preco: number;
    foto?: string;
    quantidade: number;
    promocao: boolean;
  }[];
}

export const dataProduct: IDataProduct[] = [
  {
    id: uuidv4(),
    nome: 'Mouse Logitech G20',
    preco: 90.2,
    foto:
      'https://resource.logitechg.com/content/dam/gaming/en/products/g203/g203-gallery-1.png',
    quantidade: 10,
    descricao: 'Mouse logitech G20 de alta precisão e qualidade absurda',
    promocao: false,
  },
  {
    id: uuidv4(),
    nome: 'Monitor LG ultrawide 20"',
    preco: 290.9,
    foto:
      'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133777/3/133777366_1GG.png',
    quantidade: 100,
    descricao:
      'Monitor ultrawide LG de extrema qualidade para seus jogos com 70GHz',
    promocao: true,
  },
  {
    id: uuidv4(),
    nome: 'Teclado Redragon Kumura',
    preco: 150.99,
    foto:
      'https://img.terabyteshop.com.br/archive/3643141585/teclado-redragon-kumara-led-k552-01.png',
    quantidade: 110,
    descricao: 'Teclado mecânico Redragon Kuruma',
    promocao: false,
  },
  {
    id: uuidv4(),
    nome: 'Mousepad Razer Speed',
    preco: 80.0,
    foto:
      'https://img.terabyteshop.com.br/produto/g/mouse-pad-razer-goliathus-medium-control_29522.png',
    quantidade: 70,
    descricao:
      'Mousepad razer Speed para maior velocidade de movimentos e ganho de performace',
    promocao: false,
  },
  {
    id: uuidv4(),
    nome: 'Placa de video GTX 1660 GeForce',
    preco: 1000.9,
    foto:
      'https://img.terabyteshop.com.br/produto/g/placa-de-video-galax-geforce-gtx-1660-ti-oc-6gb-60irl7dsy91c-gddr6-pci-exp_68119.png',
    quantidade: 40,
    descricao: 'Para melhores jogos e um excelente desempenho!',
    promocao: true,
  },
  {
    id: uuidv4(),
    nome: 'Alexa doth v4',
    preco: 300.5,
    foto:
      'https://cdn.shopify.com/s/files/1/0043/6876/0930/products/FinalEchoDot4_345x@2x.png?v=1606295780',
    quantidade: 300,
    descricao:
      'Para lembrar seus compromissos, tocar musica e se divertir com a galera',
    promocao: false,
  },
  {
    id: uuidv4(),
    nome: 'Macbook Pro 2019',
    preco: 20000.0,
    foto: 'https://pngimg.com/uploads/macbook/macbook_PNG8.png',
    quantidade: 20,
    descricao:
      'Notebook Mackbook Pro 2019 16" com 18GB de RAM, 1T de SSD e tela retina',
    promocao: true,
  },
  {
    id: uuidv4(),
    nome: 'Adptador Type C',
    preco: 180.1,
    foto: 'https://i.ibb.co/bvJm1vj/adapter-removebg-preview.png',
    quantidade: 109,
    descricao: 'Adpatador Type C com 3adapter entradas USB e 1 entrada HDMI',
    promocao: false,
  },
  {
    id: uuidv4(),
    nome: 'Teclado Razer Chroma',
    preco: 500.7,
    foto:
      'https://mkplace-img.imgix.net/storage/png/3eb514507843a2453be4ff316a4117a8a80d6632da33df94571c79ae61980cde.png?fit=fill&w=600&h=600&fill=solid',
    quantidade: 10,
    descricao: 'Teclado mecânico de extrama qualidade e uma velocidade absurda',
    promocao: false,
  },
];

export const dataCard: IDataCard = {
  frete: 30,
  itens: [
    {
      id: uuidv4(),
      nome: 'Mouse Logitech G20',
      preco: 90.2,
      foto:
        'https://resource.logitechg.com/content/dam/gaming/en/products/g203/g203-gallery-1.png',
      quantidade: 10,
      promocao: false,
    },
    {
      id: uuidv4(),
      nome: 'Monitor LG ultrawide 20"',
      preco: 290.9,
      foto:
        'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133777/3/133777366_1GG.png',
      quantidade: 100,
      promocao: true,
    },
    {
      id: uuidv4(),
      nome: 'Teclado Redragon Kumura',
      preco: 150.99,
      foto:
        'https://img.terabyteshop.com.br/archive/3643141585/teclado-redragon-kumara-led-k552-01.png',
      quantidade: 110,
      promocao: false,
    },
    {
      id: uuidv4(),
      nome: 'Mousepad Razer Speed',
      preco: 80.0,
      foto:
        'https://img.terabyteshop.com.br/produto/g/mouse-pad-razer-goliathus-medium-control_29522.png',
      quantidade: 70,
      promocao: false,
    },
    {
      id: uuidv4(),
      nome: 'Placa de video GTX 1660 GeForce',
      preco: 1000.9,
      foto:
        'https://img.terabyteshop.com.br/produto/g/placa-de-video-galax-geforce-gtx-1660-ti-oc-6gb-60irl7dsy91c-gddr6-pci-exp_68119.png',
      quantidade: 40,
      promocao: true,
    },
  ],
};
