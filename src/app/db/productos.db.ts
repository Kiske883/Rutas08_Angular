import { IProduct } from "../interfaces/iproduct.interface";

export const PRODUCTOS : IProduct[] = [
  {
    id: 1,
    title: 'Carne de ternera',
    price: 12.25,
    quantity: 200,
    description : {
        text : 'En un lugar de la macha 1',
        slug : 'resumen 1'
    },
    origen : {
        country : 'colombia' ,
        city : 'pereira' ,
        cp : '08123'
    }
  },
  {
    id: 2,
    title: 'Leche desnatada',
    price: 2,
    quantity: 14
  },
  {
    id: 3,
    title: 'Pan',
    price: 1.05,
    quantity: 100
  },
  {
    id: 4,
    title: 'Pasta',
    price: 6.5,
    quantity: 50
  },
  {
    id: 5,
    title: 'Cereales',
    price: 5.25,
    quantity: 20
  },
];