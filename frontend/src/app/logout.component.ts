import { Component, OnInit } from '@angular/core';
import { Adal5Service } from 'adal-angular5';
import { adal } from 'adal-angular';

const config: adal.Config = {
  tenant: 'rdreher.com',
  clientId: 'f101a8ad-4d6b-4f45-9736-51015e1a58e8'
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
