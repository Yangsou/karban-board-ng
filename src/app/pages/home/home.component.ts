import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IColumn } from 'src/app/models/task';
import { Store } from '@ngrx/store';
// import { TodoService } from 'src/app/services/todo/todo.service';
import { AppState } from 'src/app/app.state';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  columns: Observable<IColumn[]>;
  showForm = false;
  constructor(
    private store: Store<AppState>,
    public ui: UiService) {
    this.columns = store.select('todo');
  }

  ngOnInit() {
    this.ui.showTaskForm.subscribe((isShow) => {
      this.showForm = isShow;
    });

  }

}
