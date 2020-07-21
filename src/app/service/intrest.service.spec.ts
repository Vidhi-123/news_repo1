import { TestBed } from '@angular/core/testing';

import { IntrestService } from './intrest.service';

describe('IntrestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntrestService = TestBed.get(IntrestService);
    expect(service).toBeTruthy();
  });
});
