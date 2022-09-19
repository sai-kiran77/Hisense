import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHisenseComponent } from './about-hisense.component';

describe('AboutHisenseComponent', () => {
  let component: AboutHisenseComponent;
  let fixture: ComponentFixture<AboutHisenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHisenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHisenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
