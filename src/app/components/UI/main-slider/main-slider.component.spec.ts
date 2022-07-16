import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSliderUIComponent } from './main-slider.component';

describe('MainSliderUIComponent', () => {
  let component: MainSliderUIComponent;
  let fixture: ComponentFixture<MainSliderUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSliderUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSliderUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
