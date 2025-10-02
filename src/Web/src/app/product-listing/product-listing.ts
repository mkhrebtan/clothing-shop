import {Component, Input, OnInit, signal} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { ProductModel } from '../shared/models/product-model';

@Component({
  selector: 'app-product-listing',
  imports: [
    NgOptimizedImage,
    FaIconComponent
  ],
  templateUrl: './product-listing.html',
  styleUrl: './product-listing.css'
})
export class ProductListing implements OnInit {
  @Input() product!: ProductModel;

  faHeart = faHeart;
  faSolidHeart = faSolidHeart;
  isAddedToWishlist = false;
  selectedColorId = 0;
  imgSrc = signal('');

  ngOnInit() {
    if (this.product?.colorOptions?.length > 0) {
      this.selectedColorId = this.product.colorOptions[0].id;
    }

    if (this.product?.images?.length > 0) {
      this.imgSrc.set(this.product.images[0].url);
    }
  }

  toggleWishlist() {
    this.isAddedToWishlist = !this.isAddedToWishlist;
  }

  selectColor(colorId: number) {
    this.selectedColorId = colorId;
  }

  onMouseOver() {
    if (this.product?.images?.length > 1) {
      this.imgSrc.set(this.product.images[1].url);
    }
  }

  onMouseOut() {
    if (this.product?.images?.length > 0) {
      this.imgSrc.set(this.product.images[0].url);
    }
  }
}
