import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';

const config: adal.Config = {
  tenant: 'b5ad2fb1-ae04-4131-a671-b6b9f174bf04',
  clientId: 'fea922e0-f20b-4038-bc96-aa7be62c6e2e'
};

@Component({
  selector: 'app-logout',
  template: ''
})

export class LogoutComponent implements OnInit {

  constructor(private auth: AdalService) {
    this.auth.init(config);
  }

  ngOnInit() {
    this.auth.logOut();
  }
}
