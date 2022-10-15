import { TestBed } from '@angular/core/testing';

import { FirebaseFunctionsService } from './firebase-functions.service';

describe('FirebaseFunctionsService', () => {
  let service: FirebaseFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
