import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {

  constructor(private httpClient: HttpClient) { }

  public selectedFile;
  public event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;

  public  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }


  // This part is for uploading
  onUpload() {


    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);


    this.httpClient.post('http://localhost:8080/api/images/upload', uploadData)
      .subscribe(
        res => {console.log(res);
                this.receivedImageData = res;
                this.base64Data = this.receivedImageData.pic;
                this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; },
        err => console.log('Error Occured during saving: ' + err)
      );


  }
}

