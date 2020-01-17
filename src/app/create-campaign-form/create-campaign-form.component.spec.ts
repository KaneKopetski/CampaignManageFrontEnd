import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCampaignFormComponent } from './create-campaign-form.component';

describe('RegisterComponent', () => {
  let component: CreateCampaignFormComponent;
  let fixture: ComponentFixture<CreateCampaignFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCampaignFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCampaignFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
