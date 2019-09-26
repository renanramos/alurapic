import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '../user/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user$: Observable<User>;

    constructor(
        private userService: UserService,
        private router: Router) {
        this.user$ = userService.getUser();
    }
 
    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
}