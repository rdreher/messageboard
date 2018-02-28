import { Component } from '@angular/core';
import { WebService } from './web.service';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})

export class MessagesComponent {
  constructor (private webService: WebService) {}
}
