import { TestBed } from '@angular/core/testing';

import { MeycleaningService } from './meycleaning.service';

describe('MeycleaningService', () => {
  let service: MeycleaningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeycleaningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
