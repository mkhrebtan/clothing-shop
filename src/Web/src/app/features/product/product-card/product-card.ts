import { Component, Input, OnInit, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductModel } from '../../../shared/models/product-model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProductCardImage } from '../product-card-image/product-card-image';
import { ProductColorSwatch } from '../product-color-swatch/product-color-swatch';
import { WishlistButton } from '../wishlist-button/wishlist-button';
import { ProductCardSizeSelector } from '../product-card-size-selector/product-card-size-selector';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-listing',
  imports: [
    FaIconComponent,
    ReactiveFormsModule,
    ProductCardImage,
    ProductColorSwatch,
    WishlistButton,
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard implements OnInit {
  @Input() product!: ProductModel;
  protected readonly faShoppingCart = faShoppingCart;
  isAddedToWishlist = signal(false);
  selectedColorId = 0;
  isSizeSelectorOpened = signal(false);
  selectedSize = signal('');

  ngOnInit() {
    if (this.product?.colorOptions?.length > 0) {
      this.selectedColorId = this.product.colorOptions[0].id;
    }
  }

  onColorChange(color: { id: number }) {
    this.selectedColorId = color.id;
  }

  addToCart() {
    alert(`Added to cart: ${this.product.title}, Size: ${this.selectedSize()}`);
  }

  toggleSizeSelector() {
    this.isSizeSelectorOpened.update((value) => !value);
  }

  selectSize(size: string) {
    this.selectedSize.set(size);
  }

  protected readonly faChevronDown = faChevronDown;
}
