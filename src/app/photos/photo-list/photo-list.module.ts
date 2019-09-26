import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filterByDescription.pipe';
import { PhotoModule } from '../photo/photo.module';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription
    ],
    imports: [ 
        CommonModule,
        PhotoModule 
    ]
})
export class PhotoListModule {

}