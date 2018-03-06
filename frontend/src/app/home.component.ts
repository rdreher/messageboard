import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';

@Component({
  selector: 'app-home',
  template: `
            <app-new-message></app-new-message>
            <app-messages></app-messages>
            `
})
export class HomeComponent {}
