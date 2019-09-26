import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/component/vmessage/vmessage.module';


@NgModule({
    declarations: [ SignInComponent ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        VMessageModule
     ]
})
export class HomeModule {


}