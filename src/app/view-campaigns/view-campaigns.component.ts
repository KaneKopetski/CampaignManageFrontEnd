import { Component, OnInit } from '@angular/core';
import { CampaignService} from '../campaign.service';
import { Observable } from 'rxjs';
import { CampaignResponse} from './campaign-response';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-view-campaigns',
  templateUrl: './view-campaigns.component.html',
  styleUrls: ['./view-campaigns.component.css']
})
export class ViewCampaignsComponent implements OnInit {
  campaigns: Observable<Array<CampaignResponse>>;
  username: string;

  constructor(private campaignService: CampaignService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.username = this.localStorageService.retrieve('username');
    this.campaigns =  this.campaignService.getAllCampaignsForUser(this.username);
  }

}
