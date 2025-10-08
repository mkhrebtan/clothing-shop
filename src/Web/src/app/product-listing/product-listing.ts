import {Component, Input, OnInit, signal} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductModel } from '../shared/models/product-model';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-product-listing',
  imports: [
    NgOptimizedImage,
    FaIconComponent,
    ReactiveFormsModule
  ],
  templateUrl: './product-listing.html',
  styleUrl: './product-listing.css'
})
export class ProductListing implements OnInit {
  @Input() product!: ProductModel;

  faHeart = faHeart;
  faSolidHeart = faSolidHeart;
  faShoppingCart = faShoppingCart;
  isAddedToWishlist = false;
  selectedColorId = 0;
  selectedSize = new FormControl('');
  isHovered = signal(false);

  ngOnInit() {
    if (this.product?.colorOptions?.length > 0) {
      this.selectedColorId = this.product.colorOptions[0].id;
    }
  }

  toggleWishlist() {
    this.isAddedToWishlist = !this.isAddedToWishlist;
  }

  selectColor(colorId: number) {
    this.selectedColorId = colorId;
  }

  onMouseOver() {
    this.isHovered.set(true);
  }

  onMouseOut() {
    this.isHovered.set(false);
  }

  addToCart() {
    alert(`Added to cart: ${this.product.title}, Size: ${this.selectedSize.value}`);
  }
}
