import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelightfulIndiaComponent } from './delightful-india.component';

describe('DelightfulIndiaComponent', () => {
  let component: DelightfulIndiaComponent;
  let fixture: ComponentFixture<DelightfulIndiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelightfulIndiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelightfulIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
