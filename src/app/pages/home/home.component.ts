import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IColumn } from 'src/app/models/task';
import { Store } from '@ngrx/store';
// import { TodoService } from 'src/app/services/todo/todo.service';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  columns: Observable<IColumn[]>;
  constructor(private store: Store<AppState>) {
    this.columns = store.select('todo');
  }

  ngOnInit() {
  }

}
