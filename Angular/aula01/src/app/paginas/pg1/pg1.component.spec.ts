import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pg1Component } from './pg1.component';

describe('Pg1Component', () => {
  let component: Pg1Component;
  let fixture: ComponentFixture<Pg1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pg1Component]
    });
    fixture = TestBed.createComponent(Pg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
