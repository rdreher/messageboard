import { Component, OnInit } from '@angular/core';
import { Adal5Service } from 'adal-angular5';
import { adal } from 'adal-angular';

const config: adal.Config = {
  tenant: 'rdreher.com',
  clientId: 'fea922e0-f20b-4038-bc96-aa7be62c6e2e'
};

@Component({
  selector: 'app-logout',
  template: ''
})

export class LogoutComponent implements OnInit {

  constructor(private auth: Adal5Service) {
    this.auth.init(config);
  }

  ngOnInit() {
    this.auth.logOut();
  }
}
