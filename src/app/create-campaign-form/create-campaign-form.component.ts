import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { requiredFileType } from './upload-file-validators';
import {Component} from '@angular/core';
import {Router} from '@angular/router';

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
  templateUrl: './create-campaign-form.component.html',
  styleUrls: ['./create-campaign-form.component.css']
})
export class CreateCampaignFormComponent {
  progress = 0;
  editions: Editions[] = [
    {value: '3.5', viewValue: '3.5'},
    {value: '4E', viewValue: '4E'},
    {value: '5E', viewValue: '5E'}
  ];

  createCampaign = new FormGroup({
    campaignName: new FormControl(null, Validators.required),
    edition: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    worldMap: new FormControl(null, [Validators.required, requiredFileType('png')]),
    campaignImage: new FormControl(null, [Validators.required, requiredFileType('png')])

  });
  success = false;

  constructor(private http: HttpClient, private router: Router) {
  }


  submit() {
    this.success = false;
    if ( !this.createCampaign.valid ) {
      markAllAsDirty(this.createCampaign);
      return;
    }

    this.http.post('http://localhost:8080/api/campaigns/create', toFormData(this.createCampaign.value), {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      uploadProgress(progress => (this.progress = progress)),
      toResponseBody()
    ).subscribe(res => {
      this.progress = 0;
      this.success = true;
      this.createCampaign.reset();
    });
    this.router.navigateByUrl('/campaigns');
  }

  hasError( field: string, error: string ) {
    const control = this.createCampaign.get(field);
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
