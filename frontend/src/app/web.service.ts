import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:5000/api';
  constructor(private httpClient: Http) {}

  getMessages() {
    return this.httpClient.get(this.BASE_URL + '/messages').toPromise();
  }
  postMessage(message) {
    return this.httpClient.post(this.BASE_URL + '/messages', message).toPromise();
  }
}
