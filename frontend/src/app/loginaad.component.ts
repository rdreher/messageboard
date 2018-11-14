import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';

const config: adal.Config = {
  endpoints: {
    'https://apimessageboard.azurewebsites.net/api/messages': 'e3f598bd-da8d-4a97-86d0-7e903b4d09c3'
  },
  tenant: 'b5ad2fb1-ae04-4131-a671-b6b9f174bf04',
  clientId: 'fea922e0-f20b-4038-bc96-aa7be62c6e2e',
  postLogoutRedirectUri: 'https://messageb.azurewebsites.net/',
  cacheLocation: 'sessionStorage'
};

@Component({
  selector: 'app-loginaad',
  templateUrl: './loginaad.component.html'
})

export class LoginAadComponent implements OnInit {

  constructor(private auth: AdalService) {
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
