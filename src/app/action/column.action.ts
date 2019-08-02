import { Action } from '@ngrx/store';
import { IColumn, ITask } from '../models/task';

export const ADD_COLUMN = 'ADD_COLUMN';
export const REMOVE_COLUMN = 'REMOVE_COLUMN';

export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export class AddColumn implements Action {
  readonly type = ADD_COLUMN;

  constructor(public payload: IColumn) {}
}
export class RemoveColumn implements Action {
  readonly type = REMOVE_COLUMN;

  constructor(public payload: number | string) {}
}
export class AddTask implements Action {
  readonly type = ADD_TASK;

  constructor(public payload: ITask) {}
}

export class UpdateTask implements Action {
  readonly type = UPDATE_TASK;

  constructor(public payload: {
    form: ITask,
    id: string;
  }) {}
}

export type Actions = AddColumn | RemoveColumn | AddTask | UpdateTask;
