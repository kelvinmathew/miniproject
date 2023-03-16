import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingpagesComponent } from './bookingpages.component';

describe('BookingpagesComponent', () => {
  let component: BookingpagesComponent;
  let fixture: ComponentFixture<BookingpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingpagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
