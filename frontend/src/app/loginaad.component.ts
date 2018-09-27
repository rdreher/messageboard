import { Component, OnInit } from '@angular/core';
import { Adal5Service } from 'adal-angular5';
import { adal } from 'adal-angular';

const config: adal.Config = {
  tenant: 'rdreher.com',
  clientId: 'f101a8ad-4d6b-4f45-9736-51015e1a58e8',
  postLogoutRedirectUri: 'https://messagec.azurewebsites.net/',
  cacheLocation: 'localStorage'
};

@Component({
  selector: 'app-loginaad',
  templateUrl: './loginaad.component.html'
})

export class LoginAadComponent implements OnInit {

  constructor(private auth: Adal5Service) {
    this.auth.init(config);
  }

  ngOnInit() {
    // Handle callback if this is a redirect from Azure
    this.auth.handleWindowCallback();

    // Check if the user is authenticated. If not, call the login() method
    if (!this.auth.userInfo.authenticated) {
      this.auth.login();
    }

    // Log the user information to the console
    // console.log('username ' + this.auth.userInfo.username);
    // console.log('authenticated: ' + this.auth.userInfo.authenticated);
    // console.log('name: ' + this.auth.userInfo.profile.name);
    // console.log('token: ' + this.auth.userInfo.token);
    // console.log(this.auth.userInfo.profile);
  }
}
