import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../shared/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList!: IProduct[];
  userId = localStorage.getItem('id') as string;
  totalQty: number = 0;
  totalToPay: number = 0;
  showCart: boolean = true;

  constructor(public cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getUserCart(this.userId).subscribe(p => {
      this.cartList = p;
    })
  }

  ngDoCheck(): void {
    this.totalQty = this.cartList.reduce((acc: number, cur: IProduct) => {
      return acc += Number(cur.qty);
    }, 0);

    this.totalToPay = this.cartList.reduce((acc: number, cur: IProduct) => {
      return acc += Number(cur.qty * cur.price);
    }, 0);
  }

  productIncrease(product: any) {
    product.qty += 1;
    return this.cartService.updateCart(product, this.userId, product.id);
  }

  productDecrease(product: any) {
    if (product.qty != 0) {
      product.qty -= 1
      return this.cartService.updateCart(product, this.userId, product.id);
    } else {
      return 0;
    }
  }

  productDelete(productId: string) {
    this.cartService.deleteFromCart(this.userId, productId);
  }

  endOrder() {
    this.cartList.forEach(product => {
      this.cartService.deleteFromCart(this.userId, product.id);
    });

    this.router.navigate(['/']);
  }
}
