export interface ITask {
  id: number;
  title: string;
  description: string;
}

export interface IColumn {
  id: number | string;
  title: string;
  tasks: ITask[];
}

export interface ITodoState {
  columns: IColumn[];
}
