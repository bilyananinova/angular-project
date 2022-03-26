import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email$: Observable<string | null> = this.userService.email$;  
  
  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
  }

  logoutHandler() {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
