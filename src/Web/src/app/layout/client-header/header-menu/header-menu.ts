import { Component, signal } from '@angular/core';
import { ClickOutside } from '../../../shared/directives/click-outside';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { Gender } from '../enums/gender';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ToggleButtons } from '../../../shared/components/toggle-buttons/toggle-buttons';
import { ToggleOption } from '../../../shared/models/toggle-option';

@Component({
  selector: 'app-header-menu',
  imports: [ClickOutside, FaIconComponent, ToggleButtons],
  templateUrl: './header-menu.html',
  styleUrl: './header-menu.css',
})
export class HeaderMenu {
  protected readonly faBars = faBars;
  protected selectedGender = signal<Gender>(Gender.men);
  protected isMenuOpen = signal(false);
  protected readonly genderOptions: ToggleOption<Gender>[] = [
    { label: 'Жінки', value: Gender.women },
    { label: 'Чоловіки', value: Gender.men },
  ];
  private readonly _categories = [
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

  get categories() {
    return this._categories.filter((category) => category.gender === Gender[this.selectedGender()]);
  }

  selectGender(gender: Gender) {
    this.selectedGender.set(gender);
  }

  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}

interface Category {
  id: number;
  name: string;
  gender: string;
}
