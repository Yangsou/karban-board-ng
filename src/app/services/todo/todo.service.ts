import { Injectable } from '@angular/core';
import { ITodoState } from 'src/app/models/task';
import { generateUnitKey } from '../../helpers/stringer';

@Injectable()
export class TodoService {

  store: ITodoState = {
    columns: []
  };
  constructor() { }

  addColumn(title: string) {
    this.store.columns.push({
      title,
      id: generateUnitKey(),
      tasks: [],
    });
  }

}
