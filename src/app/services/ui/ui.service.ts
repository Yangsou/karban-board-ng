import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UiService {

  darkModeState: BehaviorSubject<boolean>;
  showTaskForm: BehaviorSubject<boolean>;

  constructor() {
    this.darkModeState = new BehaviorSubject<boolean>(false);
    this.showTaskForm = new BehaviorSubject<boolean>(false);
  }
}
