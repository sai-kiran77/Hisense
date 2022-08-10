import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersPromotionsComponent } from './offers-promotions.component';

describe('OffersPromotionsComponent', () => {
  let component: OffersPromotionsComponent;
  let fixture: ComponentFixture<OffersPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersPromotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
