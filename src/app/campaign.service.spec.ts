import { TestBed } from '@angular/core/testing';

import { CampaignService } from './campaign.service';

describe('AddPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampaignService = TestBed.get(CampaignService);
    expect(service).toBeTruthy();
  });
});
