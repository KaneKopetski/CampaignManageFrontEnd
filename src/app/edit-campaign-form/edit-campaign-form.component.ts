import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Observable, pipe} from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { requiredFileType } from './upload-file-validators';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CampaignResponse} from '../display-single-campaign/campaign-response';
import {CampaignService} from '../campaign.service';

export function uploadProgress<T>( cb: ( progress: number ) => void ) {
  return tap(( event: HttpEvent<T> ) => {
    if ( event.type === HttpEventType.UploadProgress ) {
      cb(Math.round((100 * event.loaded) / event.total));
    }
  });
}

export function toResponseBody<T>() {
  return pipe(
    filter(( event: HttpEvent<T> ) => event.type === HttpEventType.Response),
    map(( res: HttpResponse<T> ) => res.body)
  );
}

export interface Editions {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-campaign-form',
  templateUrl: './edit-campaign-form.component.html',
  styleUrls: ['./edit-campaign-form.component.css']
})
export class EditCampaignFormComponent implements OnInit{
  progress = 0;
  editions: Editions[] = [
    {value: '3.5', viewValue: '3.5'},
    {value: '4E', viewValue: '4E'},
    {value: '5E', viewValue: '5E'}
  ];
  campaignToEdit: CampaignResponse;
  // name: string;
  // edition: string;
  // description: string;
  id: number;
  cmpImage: Blob;
  cmpWorldMap: Blob;

  editCampaign = new FormGroup({
    campaignId: new FormControl(null, Validators.required),
    campaignName: new FormControl(null, Validators.required),
    edition: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    campaignImage: new FormControl(null, Validators.required),
    worldMap: new FormControl(null, Validators.required),
    owner: new FormControl(null)

  });
  success = false;

  constructor(private http: HttpClient, private router:Router, private campaignService: CampaignService, private router1: ActivatedRoute) {
  }

  ngOnInit() {
    this.router1.params.subscribe(params => {
      this.id = params.campaignId;
    });
    this.campaignService.getCampaignById(this.id).subscribe((data: CampaignResponse) => {
      this.campaignToEdit = data;
      this.cmpImage = this.campaignToEdit.campaignImage.data;
      this.cmpWorldMap = this.campaignToEdit.worldMap.data;
      // this.name = this.campaignToEdit.campaignName;
      // this.edition = this.campaignToEdit.edition;
      // this.description = this.campaignToEdit.description;
      this.editCampaign.setValue(this.campaignToEdit)
    }, (err: any) => {
      console.log('Failure Response');
    });
  }

  submit() {
    this.success = false;
    if ( !this.editCampaign.valid ) {
      markAllAsDirty(this.editCampaign);
      return;
    }

    this.http.put('http://localhost:8080/api/campaigns/update', toFormData(this.editCampaign.value), {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      uploadProgress(progress => (this.progress = progress)),
      toResponseBody()
    ).subscribe(res => {
      this.progress = 0;
      this.success = true;
      this.editCampaign.reset();
    });
    this.router.navigateByUrl('/campaigns');
  }

  hasError( field: string, error: string ) {
    const control = this.editCampaign.get(field);
    return control.dirty && control.hasError(error);
  }
}

export function markAllAsDirty( form: FormGroup ) {
    for ( const control of Object.keys(form.controls) ) {
      form.controls[control].markAsDirty();
    }
  }

export function toFormData<T>( formValue: T ) {
    const formData = new FormData();

    for ( const key of Object.keys(formValue) ) {
    const value = formValue[key];
    formData.append(key, value);
  }

    return formData;
}

