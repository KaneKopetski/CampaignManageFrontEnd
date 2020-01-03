import { TestBed } from '@angular/core/testing';

import { CreateCampaignService } from './create-campaign.service';

describe('AddPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateCampaignService = TestBed.get(CreateCampaignService);
    expect(service).toBeTruthy();
  });
});
