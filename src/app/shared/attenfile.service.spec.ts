import { TestBed } from '@angular/core/testing';

import { AttenfileService } from './attenfile.service';

describe('AttenfileService', () => {
  let service: AttenfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttenfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
