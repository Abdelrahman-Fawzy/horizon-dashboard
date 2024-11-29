import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAndCalendarComponent } from './history-and-calendar.component';

describe('HistoryAndCalendarComponent', () => {
  let component: HistoryAndCalendarComponent;
  let fixture: ComponentFixture<HistoryAndCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryAndCalendarComponent]
    });
    fixture = TestBed.createComponent(HistoryAndCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
