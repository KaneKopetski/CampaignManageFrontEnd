import { TestBed } from '@angular/core/testing';

import { SafeUrlPipeService } from './safe-url-pipe.service';

describe('SafeUrlPipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SafeUrlPipeService = TestBed.get(SafeUrlPipeService);
    expect(service).toBeTruthy();
  });
});
