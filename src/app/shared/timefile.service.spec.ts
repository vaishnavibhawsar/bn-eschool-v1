import { TestBed } from '@angular/core/testing';

import { TimefileService } from './timefile.service';

describe('TimefileService', () => {
  let service: TimefileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimefileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
