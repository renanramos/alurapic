import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validators';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { userNamePasswordValidator } from './username-password.validator';

@Component({
    templateUrl: './signup.component.html',
    providers: [ UserNotTakenValidatorService ]
})
export class SignUpComponent implements OnInit {

    signupForm: FormGroup;
    @ViewChild('emailInput', { static: false }) emailInput: ElementRef<HTMLInputElement>

    constructor(
        private formBuilder: FormBuilder,
        private signupService: SignUpService,
        private router: Router,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private platformDetectorService: PlatformDetectorService) { }

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['',
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        }, {
            validator: userNamePasswordValidator
        })
        
    }

    signup() {
        if(this.signupForm.valid && !this.signupForm.pending) {
            const newUser = this.signupForm.getRawValue() as NewUser;
            this.signupService
                .signup(newUser)
                .subscribe(
                    () => this.router.navigate(['']),
                    err => {
                        console.log(err)
                        this.platformDetectorService.isPlatformBrowser() &&
                            this.emailInput.nativeElement.focus();
                    }
                );
        }

    }

}