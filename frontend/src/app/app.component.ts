import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-root',
  template: `
            <app-nav></app-nav>
            <app-new-message></app-new-message>
            <app-messages></app-messages>
            `
})
export class AppComponent {}
