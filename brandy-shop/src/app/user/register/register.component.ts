import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }

  registerHandler(value: any) {
    let name = value.name;
    let email = value.email;
    let password = value.password;
    let rePass = value.rePassword;

    this.userService.register(name, email, password);
    this.router.navigate(['/']);

  }

}
