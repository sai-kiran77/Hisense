import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniLedTvDetailsComponent } from './mini-led-tv-details.component';

describe('MiniLedTvDetailsComponent', () => {
  let component: MiniLedTvDetailsComponent;
  let fixture: ComponentFixture<MiniLedTvDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniLedTvDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniLedTvDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
