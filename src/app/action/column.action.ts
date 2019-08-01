import { Action } from '@ngrx/store';
import { IColumn } from '../models/task';

export const ADD_COLUMN = 'ADD_COLUMN';
export const REMOVE_COLUMN = 'REMOVE_COLUMN';

export class AddColumn implements Action {
  readonly type = ADD_COLUMN;

  constructor(public payload: IColumn) {}
}
export class RemoveColumn implements Action {
  readonly type = REMOVE_COLUMN;

  constructor(public payload: number | string) {}
}

export type Actions = AddColumn | RemoveColumn;
