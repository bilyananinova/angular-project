import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../shared/product';
import { CartService } from '../../services/cart.service';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [
    trigger('show', [
      transition(':enter', [
        style({ opacity: 0, width: 0 }),
        animate('500ms linear', keyframes([
          style({ opacity: 0, width: '10%' }),
          style({ opacity: 1, width: '30%' })
        ]))
      ])
    ])
  ]
})
export class CartComponent implements OnInit, DoCheck {

  cartList: IProduct[] = [] as IProduct[];
  userId = localStorage.getItem('id') as string;
  totalQty: number = 0;
  totalToPay: number = 0;
  showCart: boolean = true;

  constructor(public cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getUserCart$(this.userId).subscribe(p => {
      this.cartList = p;
    })
  }

  continue() {
    this.showCart = !this.showCart
  }

  ngDoCheck(): void {
    this.totalQty = this.cartList.reduce((acc: number, cur: IProduct) => {
      return acc += Number(cur.qty);
    }, 0);

    this.totalToPay = this.cartList.reduce((acc: number, cur: IProduct) => {
      return acc += Number(cur.qty * cur.price);
    }, 0);
  }

  productIncrease(product: any): void {
    product.qty += 1;
    this.cartService.updateCart$(product, this.userId, product.id);
  }

  productDecrease(product: any): number | void {
    if (product.qty != 1) {
      product.qty -= 1
      this.cartService.updateCart$(product, this.userId, product.id);
    } else {
      this.cartService.deleteFromCart$(this.userId, product.id);
    }

  }

  productDelete(productId: string): void {
    this.cartService.deleteFromCart$(this.userId, productId);
  }

  endOrder(): void {
    this.cartList.forEach(product => {
      this.cartService.deleteFromCart$(this.userId, product.id);
    });

    this.router.navigate(['/']);
  }
}
