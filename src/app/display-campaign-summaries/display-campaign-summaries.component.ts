import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import {CampaignService} from '../campaign.service';
import {CampaignResponseLessWorldMap} from './campaign-response-lessworldmap';
import {Observable} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-display-campaign-summaries',
  templateUrl: './display-campaign-summaries.component.html',
  styleUrls: ['./display-campaign-summaries.component.css']
})
export class DisplayCampaignSummariesComponent implements OnInit {
  campaigns: Observable<Array<CampaignResponseLessWorldMap>>;
  username: string;

  constructor(private router: ActivatedRoute, private campaignService: CampaignService, private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.username = this.localStorageService.retrieve('username');
    this.campaigns =  this.campaignService.getAllCampaignsForUser(this.username);

  }


}
