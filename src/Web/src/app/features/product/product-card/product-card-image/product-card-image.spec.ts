import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardImage } from './product-card-image';

describe('ProductCardImage', () => {
  let component: ProductCardImage;
  let fixture: ComponentFixture<ProductCardImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
