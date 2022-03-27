import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/product';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList!: IProduct[];
  userId = localStorage.getItem('id') as string;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getUserCart(this.userId).subscribe(p => {
      this.cartList = p;
    })
  }

  productIncrease(product: any): number {
    return product.qty += 1;
  }

  productDecrease(product: any): number {
    return product.qty != 0 ? product.qty -= 1 : 0;
  }

  productDelete(productId: string) {
    this.cartService.deleteFromCart(this.userId, productId);
  }

}
