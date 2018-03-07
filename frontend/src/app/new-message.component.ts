import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html'
})

export class NewMessageComponent {

  constructor (private webService: WebService, private auth: AuthService) {}

  message = {
    owner: this.auth.name,
    text: ''
  };

  post() {
    this.webService.postMessage(this.message);
  }
}
