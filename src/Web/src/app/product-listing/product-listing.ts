import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-product-listing',
  imports: [
    NgOptimizedImage,
    FaIconComponent
  ],
  templateUrl: './product-listing.html',
  styleUrl: './product-listing.css'
})
export class ProductListing {
  faHeart = faHeart;
}
