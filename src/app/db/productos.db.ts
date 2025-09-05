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
        country : 'españa' ,
        city : 'Girona' ,
        cp : '17005'
    }
  },
  {
    id: 2,
    title: 'Leche desnatada',
    price: 2,
    quantity: 14,
    description : {
        text : 'En un lugar de la macha 2',
        slug : 'resumen 2'
    },
    origen : {
        country : 'españa' ,
        city : 'madrid' ,
        cp : '28005'
    }
  },
  {
    id: 3,
    title: 'Pan',
    price: 1.05,
    quantity: 100,
    description : {
        text : 'En un lugar de la macha 3',
        slug : 'resumen 3'
    },
    origen : {
        country : 'españa' ,
        city : 'valencia' ,
        cp : '08123'
    }
  },
  {
    id: 4,
    title: 'Pasta',
    price: 6.5,
    quantity: 50,
    description : {
        text : 'En un lugar de la macha 4',
        slug : 'resumen 4'
    },
    origen : {
        country : 'italia' ,
        city : 'roma' ,
        cp : '45555'
    }
  },
  {
    id: 5,
    title: 'Cereales',
    price: 5.25,
    quantity: 20,
    description : {
        text : 'En un lugar de la macha 5',
        slug : 'resumen 5'
    },
    origen : {
        country : 'colombia' ,
        city : 'pereira' ,
        cp : '08123'
    }
  },
];