import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductColorSwatch } from './product-color-swatch';

describe('ProductColorSwatch', () => {
  let component: ProductColorSwatch;
  let fixture: ComponentFixture<ProductColorSwatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductColorSwatch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductColorSwatch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
