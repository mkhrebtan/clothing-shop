import { ColorOption } from './color-option';

export interface ProductModel {
  id: number;
  title: string;
  price: number;
  isOnSale: boolean;
  salePrice?: number;
  images: ProductImage[];
  colorOptions: ColorOption[];
  sizes: string[];
}

interface ProductImage {
  url: string;
  alt: string;
  order: number;
}
