import { IColumn } from '../models/task';
import * as todoAction from '../action/column.action';

const initialState: IColumn[] = [
  {
    id: 1,
    tasks: [],
    title: 'hello'
  }
];

export function reducer(state: IColumn[] = initialState, action: todoAction.Actions) {
  switch (action.type) {
    case todoAction.ADD_COLUMN:
      return [...state, action.payload];
    case todoAction.REMOVE_COLUMN:
      return state.filter((e) => e.id !== action.payload);
    default:
      return state;
  }
}
