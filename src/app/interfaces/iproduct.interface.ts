export interface IProduct {
    id: number;
    title: string;
    price: number;
    quantity: number;
    description?: IDescription,
    origen?: IOrigen
}

export interface IDescription {
    text: string,
    slug: string
}

export interface IOrigen {
    country: string,
    city: string,
    cp: string
}