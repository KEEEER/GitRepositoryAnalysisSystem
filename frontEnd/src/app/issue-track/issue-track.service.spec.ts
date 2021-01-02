import { TestBed } from '@angular/core/testing';

import { IssueTrackService } from './issue-track.service';

describe('IssueTrackService', () => {
  let service: IssueTrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueTrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
