import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingsRowComponent } from './trendings-row.component';

describe('TrendingsRowComponent', () => {
  let component: TrendingsRowComponent;
  let fixture: ComponentFixture<TrendingsRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingsRowComponent]
    });
    fixture = TestBed.createComponent(TrendingsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
