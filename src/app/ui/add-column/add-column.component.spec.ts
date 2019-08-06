import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddColumnComponent } from './add-column.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/reducer/column.reducer';

describe('AddTaskComponent', () => {
  let component: AddColumnComponent;
  let fixture: ComponentFixture<AddColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddColumnComponent,
        AddTaskComponent
      ],
      imports: [
        FormsModule,
        StoreModule.forRoot({
          todo: reducer
        }),
      ],
      providers: [
        Store
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
