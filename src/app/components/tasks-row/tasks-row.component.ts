import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-row',
  templateUrl: './tasks-row.component.html',
  styleUrls: ['./tasks-row.component.scss']
})
export class TasksRowComponent implements OnInit {
  selectAll: any;
  valueOfSelect: boolean = false;
  tasks: any[] = [];

  ngOnInit(): void {
    this.fillTasks(this.valueOfSelect);
  }

  selectAllTasks() {
    this.valueOfSelect = this.selectAll[0] ? this.selectAll[0] : false
    this.fillTasks(this.valueOfSelect);
  }

  change() {
    let isThereChecked = this.tasks.filter(task => task['taskStatus' + task.id] == true)
    this.selectAll = isThereChecked.length > 0 ? [true] : [false]
  }

  fillTasks(isSelectAll: boolean) {
    this.tasks = [
      { id: 1, title: 'landing page design' },
      { id: 2, title: 'dashboard builder' },
      { id: 3, title: 'mobile app design' },
      { id: 4, title: 'illustrations' },
      { id: 5, title: 'promotional LP' },
    ]

    this.tasks.forEach(task => task['taskStatus' + task.id] = isSelectAll);
  }
}
