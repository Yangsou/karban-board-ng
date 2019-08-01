import { Component, Input } from '@angular/core';
import { IColumn } from 'src/app/models/task';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  private ownColumn: IColumn = {
    id: null,
    tasks: [],
    title: ''
  };
  @Input() column: IColumn;
  // set column(column: IColumn) {
  //   this.ownColumn = column;
  // }
  // get column() {
  //   return this.ownColumn;
  // }

}
