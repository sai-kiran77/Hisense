import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWarrantyInformationComponent } from './product-warranty-information.component';

describe('ProductWarrantyInformationComponent', () => {
  let component: ProductWarrantyInformationComponent;
  let fixture: ComponentFixture<ProductWarrantyInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWarrantyInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWarrantyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
