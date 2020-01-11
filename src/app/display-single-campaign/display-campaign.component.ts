import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import {CampaignService} from '../campaign.service';
import {CampaignResponse} from '../view-campaigns/campaign-response';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-campaign.component.html',
  styleUrls: ['./display-campaign.component.css']
})
export class DisplayCampaignComponent implements OnInit {
  campaignResponse: CampaignResponse;
  image: Blob;

  constructor(private router: ActivatedRoute, private campaignService: CampaignService, private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.campaignService.getCampaignById(2).subscribe((data: CampaignResponse) => {
      this.campaignResponse = data;
      this.image = this.campaignResponse.campaignImage.data;
    }, (err: any) => {
      console.log('Failure Response');
    });
  }
}