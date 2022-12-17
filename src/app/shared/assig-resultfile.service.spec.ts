import { TestBed } from '@angular/core/testing';

import { AssigResultfileService } from './assig-resultfile.service';

describe('AssigResultfileService', () => {
  let service: AssigResultfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssigResultfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
