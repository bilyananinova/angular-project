import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  loginHandler(value: any) {
    let email = value.email;
    let password = value.password;
    
    if (email != '' && password != '') {
      this.userService.login(email, password);
    } else {
      alert('All fields are required!');
    }

  }
}
