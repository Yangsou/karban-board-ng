import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as TodoActions from '../../action/column.action';
import { generateUnitKey } from 'src/app/helpers/stringer';

@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.scss']
})
export class AddColumnComponent implements OnInit {

  newColumnTitle = '';

  constructor(private store: Store<AppState>) { }


  async handleAddColumn() {
    await this.store.dispatch({
      type: TodoActions.ADD_COLUMN,
      payload: {
        title: this.newColumnTitle,
        id: generateUnitKey(),
        tasks: []
      }
    });
    this.newColumnTitle = '';
  }

  ngOnInit() {
  }
}
