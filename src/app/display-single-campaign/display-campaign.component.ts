import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import {CampaignService} from '../campaign.service';
import {CampaignResponse} from './campaign-response';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-campaign.component.html',
  styleUrls: ['./display-campaign.component.css']
})

export class DisplayCampaignComponent implements OnInit {
  campaignResponse: CampaignResponse;
  permaLink: number;
  image: Blob;
  image2: Blob;

  constructor(private router: ActivatedRoute, private campaignService: CampaignService, private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.campaignService.getCampaignById(this.permaLink).subscribe((data: CampaignResponse) => {
      this.campaignResponse = data;
      this.image = this.campaignResponse.campaignImage.data;
      this.image2 = this.campaignResponse.worldMap.data;
    }, (err: any) => {
      console.log('Failure Response');
    });
  }
}
