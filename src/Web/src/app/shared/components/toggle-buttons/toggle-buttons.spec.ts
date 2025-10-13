import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButtons } from './toggle-buttons';

describe('ToggleButtons', () => {
  let component: ToggleButtons;
  let fixture: ComponentFixture<ToggleButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
