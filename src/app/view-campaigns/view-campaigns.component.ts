import { Component, OnInit } from '@angular/core';
import { CampaignService} from '../campaign.service';
import { Observable } from 'rxjs';
import { CampaignResponse} from './campaign-response';
import {LocalStorageService} from 'ngx-webstorage';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {tap} from 'rxjs/operators';


@Component({
  selector: 'app-view-campaigns',
  templateUrl: './view-campaigns.component.html',
  styleUrls: ['./view-campaigns.component.css']
})
export class ViewCampaignsComponent implements OnInit {
  campaigns: Observable<Array<CampaignResponse>>;
  username: string;

  constructor(private campaignService: CampaignService, private localStorageService: LocalStorageService, private httpClient: HttpClient) {
  }

  ngOnInit() {
   this.username = this.localStorageService.retrieve('username');
    // this.username = this.localStorageService.retrieve('username');
    // this.httpClient
    //   .get('http://localhost:8080/api/campaigns/owner/' + this.username)
    //     .subscribe(response => this.campaigns = response.data);
   this.campaigns = this.campaignService.getAllCampaignsForUser(this.username);
   console.log(this.campaigns);
  }

  // ngOnInit() {
  //   this.campaignService.getAllCampaignsForUser(this.localStorageService.retrieve('username'))
  //     .subscribe(campaigns => this.campaigns = campaigns['results']);
  // }

  // ngOnInit() {
  //   this.username = this.localStorageService.retrieve('username');
  //   this.campaignService.getAllCampaignsForUser(this.username)
  //     .subscribe((data: Array<CampaignResponse>) =>
  //     {
  //       this.campaigns = Array<data>;
  //   }, (err: any) => {
  //     console.log('Failure Response');
  //   });
  // }

}
