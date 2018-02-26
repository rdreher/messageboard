import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {

  constructor(private httpClient: Http) {}

  getMessages() {
    return this.httpClient.get('http://localhost:5000/api/messages').toPromise();
  }
}
