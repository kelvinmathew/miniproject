import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singlepages1Component } from './singlepages1.component';

describe('Singlepages1Component', () => {
  let component: Singlepages1Component;
  let fixture: ComponentFixture<Singlepages1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Singlepages1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singlepages1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
