import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToggleOption } from '../../models/toggle-option';

@Component({
  selector: 'app-toggle-buttons',
  imports: [],
  templateUrl: './toggle-buttons.html',
  styleUrl: './toggle-buttons.css',
})
export class ToggleButtons<TEnum> {
  @Input() options!: ToggleOption<TEnum>[];

  @Input() value?: TEnum;
  @Output() valueChange = new EventEmitter<TEnum>();

  selectOption(option: ToggleOption<TEnum>) {
    if (option.value !== this.value) {
      this.valueChange.emit(option.value);
    }
  }
}
