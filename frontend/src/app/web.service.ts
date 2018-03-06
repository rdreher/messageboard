import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:5000/api';

  private messageStore = [];

  private messageSubject = new Subject();

  messages = this.messageSubject.asObservable();

  constructor(private httpClient: Http, private sb: MatSnackBar) {
    this.getMessages('');
  }

  getMessages(user) {
    user = (user) ? '/' + user : '';
    this.httpClient.get(this.BASE_URL + '/messages' + user).subscribe(response => {
      this.messageStore = response.json();
      this.messageSubject.next(this.messageStore);
    }, error => {
      this.handleError('Unable to get messages');
    });
  }

  async postMessage(message) {
    try {
      const resp = await this.httpClient.post(this.BASE_URL + '/messages', message).toPromise();
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
