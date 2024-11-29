import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataItemsComponent } from './data-items.component';

describe('DataItemsComponent', () => {
  let component: DataItemsComponent;
  let fixture: ComponentFixture<DataItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataItemsComponent]
    });
    fixture = TestBed.createComponent(DataItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
