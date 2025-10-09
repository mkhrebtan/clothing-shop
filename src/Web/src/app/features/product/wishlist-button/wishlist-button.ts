import {Component, Input} from '@angular/core';
import {ProductModel} from '../../../shared/models/product-model';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as faSolidHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card-wishlist-btn',
  imports: [
    FaIconComponent
  ],
  templateUrl: './wishlist-button.html',
  styleUrl: './wishlist-button.css'
})
export class WishlistButton {
  @Input() productId!: ProductModel['id'];
  isAddedToWishlist = false;

  faHeart = faHeart;
  faSolidHeart = faSolidHeart;

  toggleWishlist() {
    this.isAddedToWishlist = !this.isAddedToWishlist;
  }
}
