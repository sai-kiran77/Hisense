import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectMatch2022Component } from './perfect-match2022.component';

describe('PerfectMatch2022Component', () => {
  let component: PerfectMatch2022Component;
  let fixture: ComponentFixture<PerfectMatch2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfectMatch2022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectMatch2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
