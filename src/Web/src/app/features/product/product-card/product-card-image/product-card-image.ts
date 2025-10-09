import {Component, Input, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ProductImage} from '../../../../shared/models/product-image';

@Component({
  selector: 'app-product-card-image',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './product-card-image.html',
  styleUrl: './product-card-image.css'
})
export class ProductCardImage {
  @Input() mainImage!: ProductImage;
  @Input() secondaryImage!: ProductImage;

  isHovered = signal(false);

  onMouseOver() {
    this.isHovered.set(true);
  }

  onMouseOut() {
    this.isHovered.set(false);
  }
}
