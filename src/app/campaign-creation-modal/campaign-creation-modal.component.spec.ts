import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignCreationModalComponent } from './campaign-creation-modal.component';

describe('CampaignCreationModalComponent', () => {
  let component: CampaignCreationModalComponent;
  let fixture: ComponentFixture<CampaignCreationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignCreationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignCreationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
