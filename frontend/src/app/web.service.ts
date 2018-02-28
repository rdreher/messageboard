import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:5000/api';
  public messages = [];

  constructor(private httpClient: Http) {
    this.getMessages();
  }

  async getMessages() {
    const response = await this.httpClient.get(this.BASE_URL + '/messages').toPromise();
    this.messages = response.json();
  }
  async postMessage(message) {
    const response = await this.httpClient.post(this.BASE_URL + '/messages', message).toPromise();
    this.messages.push(response.json());
  }
}
