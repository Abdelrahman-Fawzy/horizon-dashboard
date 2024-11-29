import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAndTableComponent } from './team-and-table.component';

describe('TeamAndTableComponent', () => {
  let component: TeamAndTableComponent;
  let fixture: ComponentFixture<TeamAndTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamAndTableComponent]
    });
    fixture = TestBed.createComponent(TeamAndTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
