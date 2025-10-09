import { ProductColor } from './product-color';
import { ProductImage } from './product-image';

export interface ProductModel {
  id: number;
  title: string;
  price: number;
  isOnSale: boolean;
  salePrice?: number;
  images: ProductImage[];
  colorOptions: ProductColor[];
  sizes: string[];
}
