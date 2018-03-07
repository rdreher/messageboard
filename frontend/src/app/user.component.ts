import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {

  model = {
    firstName: '',
    lastName: ''
  };
  constructor(private webService: WebService) {}

  ngOnInit() {
    this.webService.getUser().subscribe( res => {
      this.model.firstName = res.firstName;
      this.model.lastName = res.lastName;
    });
  }

  saveUser(userData) {
    this.webService.saveUser(userData).subscribe();
  }
}
