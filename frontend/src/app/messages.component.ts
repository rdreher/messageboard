import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})

export class MessagesComponent implements OnInit {
  constructor (private webService: WebService) {}
  messages = [];

  async ngOnInit() {
    const response = await this.webService.getMessages();
    this.messages = response.json();

  }
}
