import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickChartsComponent } from './quick-charts.component';

describe('QuickChartsComponent', () => {
  let component: QuickChartsComponent;
  let fixture: ComponentFixture<QuickChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickChartsComponent]
    });
    fixture = TestBed.createComponent(QuickChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
