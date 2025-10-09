import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductColor} from '../../../shared/models/product-color';

@Component({
  selector: 'app-product-color-swatch',
  imports: [],
  templateUrl: './product-color-swatch.html',
  styleUrl: './product-color-swatch.css'
})
export class ProductColorSwatch {
  @Input() color!: ProductColor;
  @Input() isSelected: boolean = false;
  @Output() colorChange = new EventEmitter<ProductColor>();

  selectColor() {
    this.colorChange.emit(this.color);
  }
}
