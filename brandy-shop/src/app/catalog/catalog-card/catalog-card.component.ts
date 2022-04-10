import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { LikesService } from 'src/app/services/likes.service';
import { IProduct } from '../../shared/product';
import { ProductsService } from '../../services/products.service';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.css']
})
export class CatalogCardComponent implements OnInit {

  @Input() product!: IProduct;
  userId!: string;
  userId$: Observable<string | null> = this.userService.userId$;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private likeService: LikesService,
    public userService: UserService) { }

  ngOnInit(): void {
    this.userId$.subscribe(user => {
      this.userId = !user ? '' : user
    });
  }

  like(productId: string): void {
    this.likeService.likeProduct(productId, this.userId);
  }

  dislike(productId: string): void {
    this.likeService.dislikeProduct(productId, this.userId);
  }

  cartHandler(): void {
    this.cartService.addCart$(this.product, this.userId);
  }

  deleteHandler(id: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productsService.deleteProduct$(id);
    }
  }
}
