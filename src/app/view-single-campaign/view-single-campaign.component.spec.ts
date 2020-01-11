import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleCampaignComponent } from './view-single-campaign.component';

describe('ViewSingleCampaignComponent', () => {
  let component: ViewSingleCampaignComponent;
  let fixture: ComponentFixture<ViewSingleCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSingleCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
