import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoService } from './photo/photo.service';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
    declarations: [ PhotoComponent, PhotoListComponent ],
    exports: [PhotoComponent],
    imports: [ HttpClientModule ],
    providers: [PhotoService]
})
export class PhotosModule { }