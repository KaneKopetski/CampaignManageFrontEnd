import {Component, OnInit} from '@angular/core';
import {ProfilePayload} from './profile-payload';
import {ProfileService} from '../profile.service';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css']
})
export class DisplayProfileComponent implements OnInit {
  profile: ProfilePayload;
  username: string;
  image: Blob;

  constructor(private router: ActivatedRoute, private profileService: ProfileService, private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.username = this.localStorageService.retrieve('username');
    this.profileService.getProfile(this.username).subscribe((data: ProfilePayload) => {
      this.profile = data;
      this.image = this.profile.profilePicture.data;
    }, (err: any) => {
      console.log('Failure Response');
    });
  }
}
