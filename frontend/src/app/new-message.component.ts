import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html'
})

export class NewMessageComponent {

  constructor (private webService: WebService, private auth: AdalService) {}

  message = {
    owner: this.auth.userInfo.profile.name,
    text: ''
  };

  post() {
    this.webService.postMessage(this.message);
  }
}
