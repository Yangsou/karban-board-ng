import { TestBed } from '@angular/core/testing';

import { UiService } from './ui.service';
// import { BehaviorSubject } from 'rxjs';

describe('UiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UiService
    ]
  }));

  it('should be created', () => {
    const service: UiService = TestBed.get(UiService);
    expect(service).toBeTruthy();
  });

  it('dialog edit task default should be false', () => {
    const service: UiService = TestBed.get(UiService);
    const showTaskForm = service.showTaskForm.getValue();

    expect(showTaskForm).toEqual(false);
  });
});
