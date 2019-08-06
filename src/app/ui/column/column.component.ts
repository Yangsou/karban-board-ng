import { Component, Input, OnInit } from '@angular/core';
import { IColumn } from 'src/app/models/task';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() column: IColumn = {
    id: null,
    tasks: [],
    title: ''
  };

  showTaskForm = false;
  constructor() {}

  ngOnInit() {
  }

  public toggleAddTask() {
    this.showTaskForm = !this.showTaskForm;
  }
}
