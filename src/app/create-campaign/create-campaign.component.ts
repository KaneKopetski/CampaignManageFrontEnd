import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {CampaignPayload} from './campaign-payload';
import {CreateCampaignService} from '../create-campaign.service';
import {Router} from '@angular/router';
import {ImageUploadComponent} from '../image-upload/image-upload.component';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {

  createCampaignForm: FormGroup;
  campaignPayload: CampaignPayload;
  imageUploadComponent: ImageUploadComponent;

  constructor(private createCampaignService: CreateCampaignService, private router: Router, private formBuilder: FormBuilder) {
    this.createCampaignForm = this.formBuilder.group({
      campaignName: '',
      campaignDescription: '',
      campaignEdition: ''
    });
    this.campaignPayload = {
      description: '',
      campaignName: '',
      edition: 0,
    };
  }


  ngOnInit() {
  }

  createCampaign() {
    // this.imageUploadComponent.onSubmit();
    this.campaignPayload.description = this.createCampaignForm.get('campaignDescription').value;
    this.campaignPayload.campaignName = this.createCampaignForm.get('campaignName').value;
    this.campaignPayload.edition = this.createCampaignForm.get('campaignEdition').value;
    this.createCampaignService.createCampaign(this.campaignPayload).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    });
  }
}
