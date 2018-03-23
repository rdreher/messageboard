import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { Adal5Service } from 'adal-angular5';
import { adal } from 'adal-angular';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:5000/api';

  private messageStore = [];

  private messageSubject = new Subject();

  messages = this.messageSubject.asObservable();

  constructor(private httpClient: Http, private sb: MatSnackBar, private auth: Adal5Service) {
    this.getMessages('');
  }

  // Add the HTTP Header to the request
  get tokenHeader() {
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', 'Bearer ' + this.auth.userInfo.token);
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
    this.sb.open(error, 'close', {duration: 2000});
  }
}
