import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CampaignService} from '../campaign.service';
import {CampaignResponse} from './campaign-response';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-campaign.component.html',
  styleUrls: ['./display-campaign.component.css']
})

export class DisplayCampaignComponent implements OnInit {
  campaign: CampaignResponse;
  permaLink: number;
  image: Blob;
  image2: Blob;

  constructor(private router: ActivatedRoute, private campaignService: CampaignService) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.permaLink = params['campaignId'];
    });
    this.campaignService.getCampaignById(this.permaLink).subscribe((data: CampaignResponse) => {
      this.campaign = data;
      this.image = this.campaign.campaignImage.data;
      this.image2 = this.campaign.worldMap.data;
    }, (err: any) => {
      console.log('Failure Response');
    });
  }
}
