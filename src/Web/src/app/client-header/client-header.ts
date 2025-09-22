import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';

@Component({
  selector: 'app-client-header',
  imports: [
    NgOptimizedImage,
    FaIconComponent,
    ReactiveFormsModule,
    MatButtonToggleGroup,
    MatButtonToggle,
  ],
  templateUrl: './client-header.html',
  styleUrl: './client-header.css'
})
export class ClientHeader {
  faBagShopping = faBagShopping;
  faUser = faUser;
  faMagnifyingGlass = faMagnifyingGlass;
  cartItemCount = 3;
  searchQuery = new FormControl('');
  categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Clothing' },
    { id: 4, name: 'Home & Kitchen' },
    { id: 5, name: 'Sports & Outdoors' }
  ] as Category[];
  onSearchClick() {
    if (this.searchQuery.value) {
      alert(this.searchQuery.value);
    }
  }
}

interface Category {
  id: number;
  name: string;
}
