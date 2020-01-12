import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerLog } from './server-log';
import { environment } from '../../../environments/environment';

const API = environment.SERVER_LOG;

@Injectable({ providedIn: 'root' })
export class ServerLogService {

  constructor(private http:  HttpClient) { }
  

  log(serverLog: ServerLog) {
    return this.http.post(`${API}/infra/log`, serverLog);
  }

}