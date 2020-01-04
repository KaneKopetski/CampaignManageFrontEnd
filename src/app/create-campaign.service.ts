import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CampaignPayload } from './create-campaign/campaign-payload';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateCampaignService {

  constructor(private httpClient: HttpClient) {

   }

   createCampaign(campaignPayload: CampaignPayload) {
    return this.httpClient.post('http://localhost:8080/api/campaigns/create', campaignPayload);
  }
  // getAllPosts(): Observable<Array<CampaignPayload>> {
  //   return this.httpClient.get<Array<CampaignPayload>>('https://zcw-group3blogproject.cfapps.io/api/posts');
  // }
  // getPost(permaLink: number): Observable<CampaignPayload> {
  //   return this.httpClient.get<CampaignPayload>('https://zcw-group3blogproject.cfapps.io/api/posts/get/' + permaLink);
  // }
}
