import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  task: ITask;
  constructor() { }

  ngOnInit() {
    this.task = {
      id: 1,
      description: 'descs',
      title: 'hellp'
    };
  }

}
