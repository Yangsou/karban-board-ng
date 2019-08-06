import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnComponent } from './column.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskComponent } from '../task/task.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/reducer/column.reducer';

describe('ColumnComponent', () => {
  let component: ColumnComponent;
  let fixture: ComponentFixture<ColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ColumnComponent,
        AddTaskComponent,
        TaskComponent
      ],
      imports: [
        FormsModule,
        StoreModule.forRoot({
          todo: reducer
        }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
