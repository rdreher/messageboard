import { Component, Output, EventEmitter } from '@angular/core';
import { WebService } from './web.service';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html'
})

export class NewMessageComponent {

  @Output() onposted = new EventEmitter();
  constructor (private webService: WebService) {}

  message = {
    owner: '',
    text: ''
  };

  post() {
    this.webService.postMessage(this.message);
    this.onposted.emit(this.message);
  }
}
