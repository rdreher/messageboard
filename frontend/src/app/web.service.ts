import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:5000/api';
  public messages = [];

  constructor(private httpClient: Http, private sb: MatSnackBar) {
    this.getMessages();
  }

  async getMessages() {

    try {
      const resp = await this.httpClient.get(this.BASE_URL + '/messages').toPromise();
      this.messages = resp.json();
    } catch (error) {
        this.handleError('Unable to get messages');
    }

  }

  async postMessage(message) {
    try {
      const resp = await this.httpClient.post(this.BASE_URL + '/messages', message).toPromise();
      this.messages.push(resp.json());
    } catch (error) {
      this.handleError('Unable to post message');
    }
    const response = await this.httpClient.post(this.BASE_URL + '/messages', message).toPromise();
    this.messages.push(response.json());
  }

  private handleError(error) {
    this.sb.open(error, 'close', {duration: 2000});
  }
}
