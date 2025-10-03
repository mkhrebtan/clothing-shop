import { Component } from '@angular/core';
import { ClientHeader } from '../client-header/client-header';
import { ProductListing } from '../product-listing/product-listing';
import { ProductModel } from '../shared/models/product-model';


@Component({
  selector: 'app-home',
  imports: [
    ClientHeader,
    ProductListing,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  products: ProductModel[] = [
    {
      id: 1,
      title: 'Кросівки Nike Air Jordan 3',
      price: 2999,
      isOnSale: false,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1588099768531-a72d4a198538?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Кросівки Nike Air Jordan 3',
          order: 1
        },
        {
          url: 'https://images.unsplash.com/photo-1588099768501-9aaad4b1f378?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Кросівки Nike Air Jordan 3 - вид збоку',
          order: 2
        },
      ],
      colorOptions: [
        {
          id: 1,
          name: 'Blue',
          colorHex: '#1e3a8a'
        },
      ],
      sizes : ['S', 'M', 'L', 'XL'],
    },
    {
      id: 2,
      title: 'Комбінезон червоний',
      price: 1999,
      isOnSale: true,
      salePrice: 1499,
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1673758900733-b7b5b031341b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Комбінезон червоний',
          order: 1
        },
        {
          url: 'https://plus.unsplash.com/premium_photo-1673758905792-f3fa0e3860f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Комбінезон червоний - вид збоку',
          order: 2
        },
      ],
      colorOptions: [
        {
          id: 2,
          name: 'Red',
          colorHex: '#dc2626'
        },
      ],
      sizes : ['S', 'M', 'L', 'XL'],
    },
    {
      id: 3,
      title: 'Базова футболка',
      price: 499,
      isOnSale: false,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Базова футболка',
          order: 1
        },
        {
          url: 'https://images.unsplash.com/photo-1688990982651-a5d751773eff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Базова футболка',
          order: 2
        },
      ],
      colorOptions: [
        { id: 3, name: 'White', colorHex: '#FFFFFF' },
        { id: 4, name: 'Black', colorHex: '#000000' },
        { id: 5, name: 'Green', colorHex: '#00FF00' },
        { id: 6, name: 'Navy', colorHex: '#1e3a8a' }
      ],
      sizes : ['S', 'M', 'L', 'XL'],
    },
    {
      id: 4,
      title: 'Футболка з принтом',
      price: 899,
      isOnSale: false,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1593980305574-77a4b3080e89?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Базова футболка',
          order: 1
        },
        {
          url: 'https://images.unsplash.com/photo-1664333589537-03a93f548ffb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Базова футболка',
          order: 2
        },
      ],
      colorOptions: [
        { id: 3, name: 'Light Pink', colorHex: '#FFB6C1' },
        { id: 4, name: 'Black', colorHex: '#000000' },
      ],
      sizes : ['S', 'M', 'L', 'XL'],
    },
    {
      id: 5,
      title: 'Куртка демісезонна',
      price: 2199,
      isOnSale: true,
      salePrice: 1799,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1624548140129-74786c5f1279?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Куртка демісезонна',
          order: 1
        },
        {
          url: 'https://images.unsplash.com/photo-1624548139462-89b5a73ffdd6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Куртка демісезонна',
          order: 2
        },
      ],
      colorOptions: [
        { id: 4, name: 'Navy', colorHex: '#1e3a8a' },
        { id: 5, name: 'Black', colorHex: '#000000' },
        { id: 6, name: 'Olive', colorHex: '#808000' },
      ],
      sizes : ['S', 'M', 'L', 'XL'],
    },
    {
      id: 6,
      title: 'Трикотажний светр із вафельною текстурою',
      price: 1399,
      isOnSale: true,
      salePrice: 849,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1611312449297-a69dc9c3987b?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Трикотажний светр із вафельною текстурою',
          order: 1
        },
        {
          url: 'https://images.unsplash.com/photo-1611312449545-94176309c857?q=80&w=656&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Трикотажний светр із вафельною текстурою',
          order: 2
        },
      ],
      colorOptions: [
        { id: 5, name: 'Black', colorHex: '#000000' },
        { id: 6, name: 'Beige', colorHex: '#F5F5DC' },
        { id: 7, name: 'White', colorHex: '#FFFFFF' },
        { id: 8, name: 'Grey', colorHex: '#808080' },
      ],
      sizes : ['S', 'M', 'L', 'XL'],
    },
    {
      id: 7,
      title: 'Кросівки Puma X-Ray',
      price: 2399,
      isOnSale: false,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Трикотажний светр із вафельною текстурою',
          order: 1
        },
        {
          url: 'https://images.unsplash.com/photo-1608666634759-4376010f863d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Трикотажний светр із вафельною текстурою',
          order: 2
        },
      ],
      colorOptions: [
        { id: 5, name: 'Pink', colorHex: '#FFC0CB' },
        { id: 6, name: 'White', colorHex: '#FFFFFF' },
      ],
      sizes : ['S', 'M', 'L', 'XL'],
    },
    {
      id: 8,
      title: 'Мішкуваті джинси вільного крою',
      price: 1599,
      isOnSale: false,
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1688497831384-e40b2e5615cd?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Трикотажний светр із вафельною текстурою',
          order: 1
        },
        {
          url: 'https://plus.unsplash.com/premium_photo-1688497831535-120bd47d9f9c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Трикотажний светр із вафельною текстурою',
          order: 2
        },
      ],
      colorOptions: [
        { id: 5, name: 'Black', colorHex: '#000000' },
        { id: 6, name: 'Blue', colorHex: '#0000FF' },
        { id: 7, name: 'Grey', colorHex: '#808080' },
      ],
      sizes : ['S', 'M', 'L', 'XL'],
    },
  ];
}
