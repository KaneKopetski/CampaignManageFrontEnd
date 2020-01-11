import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import {CampaignResponse} from '../view-campaigns/campaign-response';
import {CampaignService} from '../campaign.service';

@Component({
  selector: 'app-view-single-campaign',
  templateUrl: './view-single-campaign.component.html',
  styleUrls: ['./view-single-campaign.component.css']
})
export class ViewSingleCampaignComponent implements OnInit {
  campaign: CampaignResponse;
  username: string;
  image: Blob;

  constructor(private router: ActivatedRoute, private campaignService: CampaignService, private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.username = this.localStorageService.retrieve('username');
    this.campaignService.getCampaignById(2).subscribe((data: CampaignResponse) => {
      this.campaign = data;
      this.image = this.campaign.campaignPicture.data;
    }, (err: any) => {
      console.log('Failure Response');
    });
  }
}
