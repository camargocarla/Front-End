import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pg5Component } from './pg5.component';

describe('Pg5Component', () => {
  let component: Pg5Component;
  let fixture: ComponentFixture<Pg5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pg5Component]
    });
    fixture = TestBed.createComponent(Pg5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
