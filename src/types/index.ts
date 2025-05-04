export interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export type Category = 
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";