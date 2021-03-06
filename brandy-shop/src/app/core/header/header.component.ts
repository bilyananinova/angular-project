import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/shared/product';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // isLogged$: Observable<boolean> = this.userService.isLogged$;
  email$: Observable<string | null> = this.userService.email$;
  userId!: string | null;
  userId$: Observable<string | null> = this.userService.userId$;
  cart$!: Observable<IProduct[]>;

  constructor(public userService: UserService, private router: Router, public cartService: CartService) { }

  ngOnInit(): void {
    this.userId$.subscribe(u => {
      this.userId = u;
      // console.log(this.userId);
      if (this.userId) {
        this.cart$ = this.cartService.getUserCart$(this.userId);
      }
    });
  }


  logoutHandler() {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}

