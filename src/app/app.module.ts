import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoService } from './services/todo/todo.service';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TaskComponent } from './ui/task/task.component';
import { ColumnComponent } from './ui/column/column.component';
import { AddColumnComponent } from './ui/add-column/add-column.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer/column.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './ui/add-task/add-task.component';
import { UiService } from './services/ui/ui.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TaskComponent,
    ColumnComponent,
    AddColumnComponent,
    AddTaskComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      todo: reducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [
    TodoService,
    UiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
