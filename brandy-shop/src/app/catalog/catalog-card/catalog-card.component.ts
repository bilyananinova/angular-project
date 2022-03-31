import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { LikesService } from 'src/app/services/likes.service';
import { IProduct } from '../../shared/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.css']
})
export class CatalogCardComponent implements OnInit {

  @Input() product!: IProduct;
  userId = localStorage.getItem('id') as string;

  constructor(private productsService: ProductsService, private cartService: CartService, private likeService: LikesService) { }

  ngOnInit(): void {
  }

  like(productId: string) {
    this.likeService.likeProduct(productId, this.userId)
  }

  dislike(productId: string) {
    this.likeService.dislikeProduct(productId, this.userId)
  }

  cartHandler(product: any) {
    this.cartService.addCart(product, this.userId)
  }

  deleteHandler(id: string) {
    this.productsService.deleteProduct(id)
  }
}
