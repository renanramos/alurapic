import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/component/vmessage/vmessage.module';


@NgModule({
    declarations: [ SignInComponent ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule
     ]
})
export class HomeModule {


}