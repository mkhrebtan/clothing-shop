import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-actions-search',
  imports: [FaIconComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './header-actions-search.html',
  styleUrl: './header-actions-search.css',
})
export class HeaderActionsSearch {
  searchQuery = new FormControl('');

  onSearchClick() {
    if (this.searchQuery.value) {
      alert(this.searchQuery.value);
    }
  }

  onEnterSearchClick(event: any) {
    if (this.searchQuery.value) {
      alert(this.searchQuery.value);
    }
  }

  protected readonly faMagnifyingGlass = faMagnifyingGlass;
}
