import { Component } from '@angular/core';
import { WebService } from './web.service';
import { Adal5Service } from 'adal-angular5';
import { adal } from 'adal-angular';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html'
})

export class NewMessageComponent {

  constructor (private webService: WebService, private auth: Adal5Service) {}

  message = {
    owner: this.auth.userInfo.profile.name,
    text: ''
  };

  post() {
    this.webService.postMessage(this.message);
  }
}
