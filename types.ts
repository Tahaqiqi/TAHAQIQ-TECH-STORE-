export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  description: string;
  longDescription: string;
  image: string;
  rating: number;
  reviewCount: number;
  specs: { [key: string]: string };
  variants: {
    color?: string[];
    storage?: string[];
  }
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: number;
  email: string;
  name?: string;
  role: 'customer' | 'admin';
}

export type AuthStatus = 'guest' | 'customer' | 'admin';

export type View =
  | { page: 'home' }
  | { page: 'category'; category: Category }
  | { page: 'product'; product: Product }
  | { page: 'checkout' }
  | { page: 'order-confirmation' }
  | { page: 'faq' }
  | { page: 'wishlist' }
  | { page: 'admin' }
  | { page: 'login' }
  | { page: 'signup' }
  | { page: 'account' }
  | { page: 'policy' }
  | { page: 'about' }
  | { page: 'contact' };