import { TestBed } from '@angular/core/testing';

import { GetmultirepodataService } from './getmultirepodata.service';

describe('GetmultirepodataService', () => {
  let service: GetmultirepodataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetmultirepodataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
