import { Component } from '@angular/core';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-root',
  template: `
            <app-nav></app-nav>
            <router-outlet></router-outlet>
            `
})
export class AppComponent {}
