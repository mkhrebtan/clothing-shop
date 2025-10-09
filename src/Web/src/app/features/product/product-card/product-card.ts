import {Component, Input, OnInit, signal} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductModel } from '../../../shared/models/product-model';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ProductCardImage} from './product-card-image/product-card-image';
import {ProductColorSwatch} from '../product-color-swatch/product-color-swatch';
import {WishlistButton} from '../wishlist-button/wishlist-button';

@Component({
  selector: 'app-product-listing',
  imports: [
    FaIconComponent,
    ReactiveFormsModule,
    ProductCardImage,
    ProductColorSwatch,
    WishlistButton
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard implements OnInit {
  @Input() product!: ProductModel;

  faHeart = faHeart;
  faSolidHeart = faSolidHeart;
  faShoppingCart = faShoppingCart;
  isAddedToWishlist = false;
  selectedColorId = 0;
  selectedSize = new FormControl('');

  ngOnInit() {
    if (this.product?.colorOptions?.length > 0) {
      this.selectedColorId = this.product.colorOptions[0].id;
    }
  }

  toggleWishlist() {
    this.isAddedToWishlist = !this.isAddedToWishlist;
  }

  onColorChange(color: { id: number }) {
    this.selectedColorId = color.id;
  }

  addToCart() {
    alert(`Added to cart: ${this.product.title}, Size: ${this.selectedSize.value}`);
  }
}
