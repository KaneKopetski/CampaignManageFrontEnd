import { Component, OnInit } from '@angular/core';
import { CampaignService} from '../campaign.service';
import {Observable, Subscription} from 'rxjs';
import { CampaignResponse} from './campaign-response';
import {LocalStorageService} from 'ngx-webstorage';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-view-campaigns',
  templateUrl: './view-campaigns.component.html',
  styleUrls: ['./view-campaigns.component.css']
})
export class ViewCampaignsComponent implements OnInit {

  constructor(private campaignService: CampaignService, private localStorageService: LocalStorageService, private httpClient: HttpClient) {
  }
  public campaigns: Array<CampaignResponse>;
  public username: string;

  ngOnInit() {
    this.username = this.localStorageService.retrieve('username');

    // this.campaigns = this.campaignService.getAllCampaignsForUser(this.username);
    // console.log(this.campaigns);
    this.campaignService.getAllCampaignsForUser(this.username).subscribe((response: any) => {
      this.campaigns = response;
    }, error => {
      console.log(error);
    });
  }
}
