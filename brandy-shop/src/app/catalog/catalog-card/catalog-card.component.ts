import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { IProduct } from '../../shared/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.css']
})
export class CatalogCardComponent implements OnInit {

  @Input() product!: IProduct;
  userId = localStorage.getItem('id') as string;

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  cartHandler(product: any) {
    this.cartService.addCart(product, this.userId)
  }

  deleteHandler(id: string) {
    this.productsService.deleteProduct(id)
  }
}
