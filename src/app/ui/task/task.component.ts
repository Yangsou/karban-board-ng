import { Component, OnInit, Input } from '@angular/core';
import { ITask, defaultTask } from 'src/app/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() task: ITask = defaultTask();
  @Input() columnId: number | string;

}
