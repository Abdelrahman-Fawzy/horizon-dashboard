import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksRowComponent } from './tasks-row.component';

describe('TasksRowComponent', () => {
  let component: TasksRowComponent;
  let fixture: ComponentFixture<TasksRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksRowComponent]
    });
    fixture = TestBed.createComponent(TasksRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
