import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from './web.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})

export class MessagesComponent implements OnInit {
  constructor (private webService: WebService, private route: ActivatedRoute) {}

  ngOnInit() {
    const name = this.route.snapshot.params.name;
    this.webService.getMessages(name);
  }
}
