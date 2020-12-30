import { TestBed } from '@angular/core/testing';

import { CommitTrendService } from './commit-trend.service';

describe('CommitTrendService', () => {
  let service: CommitTrendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitTrendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
