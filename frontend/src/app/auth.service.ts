import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  BASE_URL = 'http://localhost:5000/auth';
  NAME_KEY = 'name';
  TOKEN_KEY = 'token';

  constructor(private httpClient: Http, private router: Router) {}

  get name() {
    return localStorage.getItem(this.NAME_KEY);
  }
  // Use double negative to check
  // if token exists in memory
  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  login(loginData) {
    this.httpClient.post(this.BASE_URL + '/login', loginData).subscribe(res => {
      this.authenticate(res);
    });
  }

  logout() {
    localStorage.removeItem(this.NAME_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
  }

  register(user) {
    delete user.confirmPassword;
    this.httpClient.post(this.BASE_URL + '/register', user).subscribe(res => {
    this.authenticate(res);
    });
  }

  authenticate(res) {
    const authResponse = res.json();
    if (!authResponse.token) {
      return;
    } else {
      localStorage.setItem(this.TOKEN_KEY, authResponse.token);
      localStorage.setItem(this.NAME_KEY, authResponse.firstName);
      this.router.navigate(['/']);
    }
  }
}
