import { Product } from ".";

export interface Cart {
    id: number,
    price: number,
    count: number,
    books: Product[];  
    }