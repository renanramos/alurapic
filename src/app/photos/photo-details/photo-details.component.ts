import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";
import { AlertService } from 'src/app/shared/component/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  templateUrl: "./photo-details.component.html"
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<Photo>;
  photoId: number;

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(() => {}, err => {
      this.router.navigate(['not-found']);
    });
  }

  remove() {
    this.photoService
      .removePhoto(this.photoId)
      .subscribe(() => {
        this.alertService.success('Photo removed', true);
        this.router.navigate(['/user', this.userService.getUserName()]);
      },
      (err) => {
        this.alertService.warning('Could not delete the photo', true);
      });
  }
}
