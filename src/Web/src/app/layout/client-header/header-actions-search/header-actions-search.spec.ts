import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderActionsSearch } from './header-actions-search';

describe('HeaderActionsSearch', () => {
  let component: HeaderActionsSearch;
  let fixture: ComponentFixture<HeaderActionsSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderActionsSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderActionsSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
