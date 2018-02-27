import { Component , ViewChild } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';

@Component({
  selector: 'app-root',
  template: `
            <h1>Message Board</h1>
            <app-new-message (onposted)="onposted($event)"></app-new-message>
            <app-messages></app-messages>
            `
})
export class AppComponent {
  @ViewChild(MessagesComponent) messages: MessagesComponent;
  onposted(message) {
    this.messages.messages.push(message);
  }
}
