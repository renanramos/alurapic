import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';
import { ServerLogService } from './global-error-handler/server-log-service';
import { GlobalErrorComponent } from './global-error/global-error.component';

@NgModule({
  declarations: [ 
    NotFoundComponent,
    GlobalErrorComponent
   ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    ServerLogService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
})
export class ErrorsModule { }
