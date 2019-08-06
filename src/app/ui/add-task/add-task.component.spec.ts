import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskComponent } from './add-task.component';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/reducer/column.reducer';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddTaskComponent
      ],
      imports: [
        FormsModule,
        StoreModule.forRoot({
          todo: reducer
        }),
      ],
      providers: [
        Store,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
