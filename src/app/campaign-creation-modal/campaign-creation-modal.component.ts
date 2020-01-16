import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../DialogData';

@Component({
  selector: 'app-campaign-creation-modal',
  templateUrl: './campaign-creation-modal.component.html',
  styleUrls: ['./campaign-creation-modal.component.css']
})
export class CampaignCreationModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CampaignCreationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
