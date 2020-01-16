import {Component, OnInit, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import {CampaignService} from '../campaign.service';
import {CampaignResponseLessWorldMap} from './campaign-response-lessworldmap';
import {Observable} from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {CampaignCreationModalComponent} from '../campaign-creation-modal/campaign-creation-modal.component';

@Component({
  selector: 'app-display-campaign-summaries',
  templateUrl: './display-campaign-summaries.component.html',
  styleUrls: ['./display-campaign-summaries.component.css']
})
export class DisplayCampaignSummariesComponent implements OnInit {
  campaigns: Observable<Array<CampaignResponseLessWorldMap>>;
  username: string;
  animal: string;
  name: string;

  // tslint:disable-next-line:max-line-length
  constructor(private router: ActivatedRoute, private campaignService: CampaignService, private localStorageService: LocalStorageService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.username = this.localStorageService.retrieve('username');
    this.campaigns =  this.campaignService.getAllCampaignsForUser(this.username);

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CampaignCreationModalComponent, {
      // width: '800px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

}
