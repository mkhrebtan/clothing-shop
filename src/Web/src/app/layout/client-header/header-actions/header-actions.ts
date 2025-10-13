import { Component, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { AuthDialog } from '../../../features/auth/auth-dialog/auth-dialog';
import { HeaderActionsSearch } from '../header-actions-search/header-actions-search';

@Component({
  selector: 'app-header-actions',
  imports: [FaIconComponent, FormsModule, ReactiveFormsModule, AuthDialog, HeaderActionsSearch],
  templateUrl: './header-actions.html',
  styleUrl: './header-actions.css',
})
export class HeaderActions {
  isAuthDialogOpen = signal(false);
  searchQuery = new FormControl('');
  cartItemCount = 2;

  onSearchClick() {
    if (this.searchQuery.value) {
      alert(this.searchQuery.value);
    }
  }

  openAuthDialog() {
    this.isAuthDialogOpen.set(true);
  }

  closeAuthDialog() {
    this.isAuthDialogOpen.set(false);
  }

  protected readonly faMagnifyingGlass = faMagnifyingGlass;
  protected readonly faUser = faUser;
  protected readonly faBagShopping = faBagShopping;
}
