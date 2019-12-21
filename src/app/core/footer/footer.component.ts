import { Component, OnInit } from "@angular/core";
import { UserService } from "../user/user.service";
import { Observable } from "rxjs";
import { User } from "../user/user";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "ap-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  user$: Observable<User>;

  userName: string = '';

  constructor(
    private userService: UserService,
    private router: Router) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }

  addNewPhoto() {
    this.userName = this.userService.getUserName();
    this.router.navigateByUrl(`user/${this.userName}/p/add`);
  }
}
