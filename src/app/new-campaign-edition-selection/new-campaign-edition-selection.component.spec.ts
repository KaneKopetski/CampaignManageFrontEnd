import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCampaignEditionSelectionComponent } from './new-campaign-edition-selection.component';

describe('NewCampaignEditionSelectionComponent', () => {
  let component: NewCampaignEditionSelectionComponent;
  let fixture: ComponentFixture<NewCampaignEditionSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCampaignEditionSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCampaignEditionSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
