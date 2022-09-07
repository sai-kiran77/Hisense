import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaEventComponent } from './fifa-event.component';

describe('FifaEventComponent', () => {
  let component: FifaEventComponent;
  let fixture: ComponentFixture<FifaEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifaEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifaEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
