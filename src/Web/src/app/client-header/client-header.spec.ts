import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHeader } from './client-header';

describe('ClientHeader', () => {
  let component: ClientHeader;
  let fixture: ComponentFixture<ClientHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
