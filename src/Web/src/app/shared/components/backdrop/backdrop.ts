import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-backdrop',
    imports: [],
  templateUrl: './backdrop.html',
  styleUrl: './backdrop.css'
})
export class Backdrop {
  @Output() backdropClick = new EventEmitter<void>();

  onClick() {
    this.backdropClick.emit();
  }
}
