import { TestBed } from '@angular/core/testing';

import { GetProjectInfoService } from './get-project-info.service';

describe('GetProjectInfoService', () => {
  let service: GetProjectInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProjectInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
