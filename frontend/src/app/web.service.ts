import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { AdalService } from 'adal-angular4';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class WebService {
  BASE_URL = 'https://apimessageboard.azurewebsites.net/api';

  private messageStore = [];

  private messageSubject = new Subject();

  messages = this.messageSubject.asObservable();

  private token = '';

  constructor(private httpClient: Http, private sb: MatSnackBar, private auth: AdalService) {
    this.getMessages('');
  }

  // Add the HTTP Header to the request
  get tokenHeader() {
    this.auth.acquireToken('e3f598bd-da8d-4a97-86d0-7e903b4d09c3').subscribe( response => {
      this.token = response.toString();
    });
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', 'Bearer ' + this.token);
    return new RequestOptions({headers: header});
  }

  getMessages(user) {
    user = (user) ? '/' + user : '';
    this.httpClient.get(this.BASE_URL + '/messages' + user, this.tokenHeader).subscribe(response => {
      this.messageStore = response.json();
      this.messageSubject.next(this.messageStore);
    }, error => {
      this.handleError('Unable to get messages');
    });
  }

  async postMessage(message) {
    try {
      const resp = await this.httpClient.post(this.BASE_URL + '/messages', message, this.tokenHeader).toPromise();
      this.messageStore.push(resp.json());
      this.messageSubject.next(this.messageStore);
    } catch (error) {
      this.handleError('Unable to post message');
    }
  }

  private handleError(error) {
    this.sb.open(error, 'close', {duration: 4000});
  }
}
