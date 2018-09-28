import { Component } from '@angular/core';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})

export class NavComponent {
  constructor(public auth: AdalService) {}
}
