import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestTermsAndConditionsComponent } from './contest-terms-and-conditions.component';

describe('ContestTermsAndConditionsComponent', () => {
  let component: ContestTermsAndConditionsComponent;
  let fixture: ComponentFixture<ContestTermsAndConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContestTermsAndConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestTermsAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
