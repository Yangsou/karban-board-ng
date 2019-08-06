import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ColumnComponent } from 'src/app/ui/column/column.component';
import { AddColumnComponent } from 'src/app/ui/add-column/add-column.component';
import { AddTaskComponent } from 'src/app/ui/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from 'src/app/ui/task/task.component';
import { Store, StoreModule } from '@ngrx/store';
import { UiService } from 'src/app/services/ui/ui.service';
import { reducer } from 'src/app/reducer/column.reducer';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ColumnComponent,
        AddColumnComponent,
        AddTaskComponent,
        TaskComponent
      ],
      imports: [
        FormsModule,
        StoreModule.forRoot({
          todo: reducer
        }),
      ],
      providers: [
        Store,
        UiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
