import {Component, Output, EventEmitter, signal} from '@angular/core';
import { Backdrop } from '../shared/components/backdrop/backdrop';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-dialog',
  imports: [Backdrop, FaIconComponent, ReactiveFormsModule],
  templateUrl: './auth-dialog.html',
  styleUrl: './auth-dialog.css'
})
export class AuthDialog {
  @Output() closeDialog = new EventEmitter<void>();
  faXmark = faXmark;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  isLoginMode = signal<boolean>(true);

  showLoginPassword = signal<boolean>(false);
  loginPassword = new FormControl('');

  showRegisterPassword = signal<boolean>(false);
  registerPassword = new FormControl('');

  showConfirmPassword = signal<boolean>(false);
  confirmPassword = new FormControl('');

  toggleForm() {
    this.isLoginMode.set(!this.isLoginMode());
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
}
