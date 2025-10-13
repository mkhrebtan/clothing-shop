import { Component, Output, EventEmitter, signal } from '@angular/core';
import { Backdrop } from '../../../shared/components/backdrop/backdrop';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToggleButtons } from '../../../shared/components/toggle-buttons/toggle-buttons';
import { ToggleOption } from '../../../shared/models/toggle-option';
import { AuthOption } from '../enums/auth-option';

@Component({
  selector: 'app-auth-dialog',
  imports: [Backdrop, FaIconComponent, ReactiveFormsModule, ToggleButtons],
  templateUrl: './auth-dialog.html',
  styleUrl: './auth-dialog.css',
})
export class AuthDialog {
  @Output() closeDialog = new EventEmitter<void>();
  faXmark = faXmark;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  selectedOption = signal<AuthOption>(AuthOption.LOGIN);

  showLoginPassword = signal<boolean>(false);
  loginPassword = new FormControl('');

  showRegisterPassword = signal<boolean>(false);
  registerPassword = new FormControl('');

  showConfirmPassword = signal<boolean>(false);
  confirmPassword = new FormControl('');

  selectOption(option: AuthOption) {
    this.selectedOption.set(option);
  }

  onClose() {
    this.closeDialog.emit();
  }

  toggleLoginPasswordVisibility() {
    this.showLoginPassword.set(!this.showLoginPassword());
  }

  toggleRegisterPasswordVisibility() {
    this.showRegisterPassword.set(!this.showRegisterPassword());
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword.set(!this.showConfirmPassword());
  }

  protected readonly authOptions: ToggleOption<AuthOption>[] = [
    { label: 'Вхід', value: AuthOption.LOGIN },
    { label: 'Реєстрація', value: AuthOption.REGISTER },
  ];
  protected readonly AuthOption = AuthOption;
}
