import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { faBagShopping, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ClickOutside } from '../shared/directives/click-outside';
import { Gender } from './enums/gender';
import { AuthDialog } from '../auth-dialog/auth-dialog';

@Component({
  selector: 'app-client-header',
  imports: [
    NgOptimizedImage,
    FaIconComponent,
    ReactiveFormsModule,
    ClickOutside,
    AuthDialog,
  ],
  templateUrl: './client-header.html',
  styleUrl: './client-header.css'
})
export class ClientHeader {
  faBagShopping = faBagShopping;
  faUser = faUser;
  faMagnifyingGlass = faMagnifyingGlass;
  faBars = faBars;
  cartItemCount = 3;
  searchQuery = new FormControl('');
  private _categories = [
    { id: 1, name: 'Футболки', gender: 'men' },
    { id: 2, name: 'Світшоти і худі', gender: 'men' },
    { id: 3, name: 'Спортивні костюми', gender: 'men' },
    { id: 4, name: 'Сорочки', gender: 'men' },
    { id: 5, name: 'Куртки', gender: 'men' },
    { id: 5, name: 'Джинси', gender: 'men' },
    { id: 5, name: 'Штани', gender: 'men' },
    { id: 5, name: 'Шорти', gender: 'men' },
    { id: 5, name: 'Взуття', gender: 'men' },
    { id: 5, name: 'Шкарпетки і спідня білизна', gender: 'men' },
    { id: 6, name: 'Футболки', gender: 'women' },
    { id: 7, name: 'Світшоти і худі', gender: 'women' },
    { id: 6, name: 'Сукні', gender: 'women' },
    { id: 7, name: 'Блузи', gender: 'women' },
    { id: 6, name: 'Пальта', gender: 'women' },
    { id: 7, name: 'Топи і боді', gender: 'women' },
    { id: 5, name: 'Джинси', gender: 'women' },
    { id: 5, name: 'Штани', gender: 'women' },
  ] as Category[];
  selectedGender = signal<Gender>(Gender.men);
  isMenuOpen = signal(false);
  isAuthDialogOpen = signal(false);

  onSearchClick() {
    if (this.searchQuery.value) {
      alert(this.searchQuery.value);
    }
  }

  selectGender(gender: Gender) {
    this.selectedGender.set(gender);
  }

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  openAuthDialog() {
    this.isAuthDialogOpen.set(true);
  }

  closeAuthDialog() {
    this.isAuthDialogOpen.set(false);
  }

  get categories() {
    return this._categories.filter(category => category.gender === Gender[this.selectedGender()]);
  }

  protected readonly Gender = Gender;
}

interface Category {
  id: number;
  name: string;
  gender: string;
}
