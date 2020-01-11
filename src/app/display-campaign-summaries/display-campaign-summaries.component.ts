import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import {CampaignService} from '../campaign.service';
import {CampaignResponseLessWorldMap} from './campaign-response-lessworldmap';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-campaign-summaries.component.html',
  styleUrls: ['./display-campaign-summaries.component.css']
})
export class DisplayCampaignSummariesComponent implements OnInit {
  campaignResponse: CampaignResponseLessWorldMap;
  // campaigns: Array<CampaignResponseLessWorldMap>;
  campaigns: Observable<Array<CampaignResponseLessWorldMap>>;
  username: string;
  image: Blob;


  constructor(private router: ActivatedRoute, private campaignService: CampaignService, private localStorageService: LocalStorageService) {
  }

  // ngOnInit() {
  //   this.campaignService.getCampaignById(2).subscribe((data: CampaignResponse) => {
  //     this.campaignResponse = data;
  //     this.image = this.campaignResponse.campaignImage.data;
  //     this.image2 = this.campaignResponse.worldMap.data;
  //   }, (err: any) => {
  //     console.log('Failure Response');
  //   });
  // }

  ngOnInit() {
    this.username = this.localStorageService.retrieve('username');
    this.campaigns =  this.campaignService.getAllCampaignsForUser(this.username);
    // this.campaignService.getAllCampaignsForUser(this.username).subscribe((response: any) => {
    //   this.campaigns = response;
    // }, error => {
    //   console.log(error);
    // });
  }
}
