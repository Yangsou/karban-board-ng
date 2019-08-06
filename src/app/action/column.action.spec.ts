import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {AppState} from '../app.state';
import { Store } from '@ngrx/store';

describe('Action column', () => {
  let store: MockStore<AppState>;
  const initState: AppState = {
    todo: []
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: initState
        })
      ]
    });
    store = TestBed.get(Store);
  });

  it('should be created', () => {
    // const action = TestBed.get(Column)
  });
  it('should return false if the user state is not logged in', () => {
    // By()
  });

});
