import { Component, Input, OnChanges } from '@angular/core';
import { ITask } from 'src/app/models/task';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as TodoActions from '../../action/column.action';
import { omit, cloneDeep } from 'lodash';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  @Input() task: ITask = {
    id: null,
    description: '',
    title: '',
    columnId: null
  };
  @Input() isDialog = true;
  @Input() columnId: number | string;
  constructor(private store: Store<AppState>) { }

  handleSubmit() {
    const task = cloneDeep(this.task);
    if (this.task.id) { // update
      this.store.dispatch({
        type: TodoActions.UPDATE_TASK,
        payload: {
          id: this.task.id,
          form: omit(task, 'id')
        }
      });
    } else {
      this.store.dispatch({
        type: TodoActions.ADD_TASK,
        payload: {
          ...this.task,
          columnId: this.columnId
        }
      });
    }
  }

}
