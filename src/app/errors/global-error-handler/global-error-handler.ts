import { ErrorHandler, Injectable, Injector } from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserService } from 'src/app/core/user/user.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {


  constructor(private injector: Injector) { }

  handleError(error: any) {

    const location = this.injector.get(LocationStrategy);
    const userService = this.injector.get(UserService);

    const url = location instanceof PathLocationStrategy 
            ? location.path()
            : '';

    const message = error.message ? error.message : error.toString();

    StackTrace
        .fromError(error)
        .then(stackFrames => {
          const stackAsString = stackFrames
            .map(sf => sf.toString())
            .join('\n');

          console.log({
            message, 
            url,
            userName: userService.getUserName(),
            stack: stackAsString
          })
        })
  }

}