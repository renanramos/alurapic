import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/component/vmessage/vmessage.module';
import { SignUpComponent } from './signup/signup.component';


@NgModule({
    declarations: [ 
        SignInComponent,
        SignUpComponent 
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule
     ]
})
export class HomeModule {


}