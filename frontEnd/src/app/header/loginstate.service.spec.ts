import { TestBed } from '@angular/core/testing';

import { LoginstateService } from './loginstate.service';

describe('LoginstateService', () => {
  let service: LoginstateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginstateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
