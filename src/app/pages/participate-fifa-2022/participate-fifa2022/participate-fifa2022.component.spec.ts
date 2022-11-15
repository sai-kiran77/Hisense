import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipateFifa2022Component } from './participate-fifa2022.component';

describe('ParticipateFifa2022Component', () => {
  let component: ParticipateFifa2022Component;
  let fixture: ComponentFixture<ParticipateFifa2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipateFifa2022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipateFifa2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
