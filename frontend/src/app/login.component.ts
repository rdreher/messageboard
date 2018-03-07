import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  constructor(private auth: AuthService) {}

  loginData = {
    email: '',
    password: ''
  };

  login() {
    this.auth.login(this.loginData);
  }
}
