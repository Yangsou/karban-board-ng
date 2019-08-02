import { IColumn, ITask } from '../models/task';
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
    case todoAction.ADD_TASK:
      return addTask(state, action.payload);
    default:
      return state;
  }
}


function addTask(state: IColumn[], task: ITask) {
  const currentColumnIndex = state.findIndex((e) => e.id === task.columnId);
  const currentColumn = state[currentColumnIndex];
  currentColumn.tasks = [
    task,
    ...currentColumn.tasks
  ];

  state[currentColumnIndex] = currentColumn;

  return state;
}

// function updateTask(state: IColumn[], task: ITask, columnId: number | string) {
//   const currentColumnIndex = state.findIndex((e) => e.id === columnId);
//   const currentColumn = state[currentColumnIndex];
//   currentColumn.tasks = [
//     task,
//     ...currentColumn.tasks
//   ];

//   state[currentColumnIndex] = currentColumn;

//   return state;
// }
