import { TestBed } from '@angular/core/testing';

import { DataGuardService } from './data-guard.service';

describe('DataGuardService', () => {
  let service: DataGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
