import { TestBed } from '@angular/core/testing';

import { SafeHtmlPipeService } from './safe-html-pipe.service';

describe('SafeHtmlPipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SafeHtmlPipeService = TestBed.get(SafeHtmlPipeService);
    expect(service).toBeTruthy();
  });
});
