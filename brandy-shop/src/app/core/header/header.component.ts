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

  email$: Observable<string | null> = this.userService.email$;
  cart: IProduct[] = [] as IProduct[];
  userId = localStorage.getItem('id') as string;

  constructor(public userService: UserService, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getUserCart(this.userId).subscribe(c => {
      this.cart = c;
    })
  }

  logoutHandler() {
    this.userService.logout();
    this.router.navigate(['/']);
  }  
}
