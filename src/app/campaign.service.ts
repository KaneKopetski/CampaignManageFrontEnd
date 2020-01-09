import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CampaignPayload } from './create-campaign/campaign-payload';
import {Observable} from 'rxjs';
import {CampaignResponse} from './view-campaigns/campaign-response';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private httpClient: HttpClient) {

   }

  createCampaign(campaignPayload: CampaignPayload) {
    return this.httpClient.post('http://localhost:8080/api/campaigns/create', campaignPayload);
  }

  getAllCampaignsForUser(username: string): Observable<Array<CampaignResponse>> {
    return this.httpClient.get<Array<CampaignResponse>>('http://localhost:8080/api/campaigns/owner/' + username);
  }
  // getPost(permaLink: number): Observable<CampaignPayload> {
  //   return this.httpClient.get<CampaignPayload>('https://zcw-group3blogproject.cfapps.io/api/posts/get/' + permaLink);
  // }
}
