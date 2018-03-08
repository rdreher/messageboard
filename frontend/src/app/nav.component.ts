import { Component } from '@angular/core';
import { Adal5Service } from 'adal-angular5';
import { adal } from 'adal-angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})

export class NavComponent {
  constructor(public auth: Adal5Service) {}
}
