import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaTestComponent } from './fifa-test.component';

describe('FifaTestComponent', () => {
  let component: FifaTestComponent;
  let fixture: ComponentFixture<FifaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifaTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
