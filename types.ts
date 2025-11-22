export interface Product {
  id: number;
  title: string;
  description: string;
  sizeInfo: string;
  price: number; // Virtual price for logic, though bundle is fixed
  image: string;
  cartCount: number; // "X kişinin sepetinde"
  isFreeShipping: boolean;
  colors: string[];
  categoryId: number;
}

export interface Category {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  active: boolean;
  maxSelection: number;
}

export interface NotificationData {
  id: number;
  name: string;
  location: string;
  timeAgo: string;
  productImage: string;
}