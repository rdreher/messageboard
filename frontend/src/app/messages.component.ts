import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-messages',
  template: `
            <h1>Message Board</h1>
            <div *ngFor="let message of messages">
              <mat-card style="margin:8px">
                <mat-card-title>{{message.owner}}</mat-card-title>
                <mat-card-content>{{message.text}}</mat-card-content>
              </mat-card>
            </div>
            `
})

export class MessagesComponent implements OnInit {
  constructor (private webService: WebService) {}
  messages = [];

  async ngOnInit() {
    const response = await this.webService.getMessages();
    this.messages = response.json();

  }
}
