import { Component, OnInit } from '@angular/core';
import { IColumn } from 'src/app/models/task';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  column: IColumn;
  constructor() { }

  ngOnInit() {
    this.column = {
      id: 22,
      title: 'column'
    };
  }

}
