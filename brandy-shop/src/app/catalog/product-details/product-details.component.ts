import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { LikesService } from 'src/app/likes.service';
import { IProduct } from 'src/app/shared/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product!: IProduct;
  userId = localStorage.getItem('id') as string;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private router: Router, private cartService: CartService, private likeService: LikesService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.productsService.getProduct(id).subscribe(p => {
      this.product = p;
    });
  }

  like(productId: string) {
    this.likeService.likeProduct(productId, this.userId)
  }

  dislike(productId: string) {
    this.likeService.dislikeProduct(productId, this.userId)
  }

  cartHandler(product: any): void {
    this.cartService.addCart(this.product, this.userId);
  }

  deleteHandler(id: string) {
    this.productsService.deleteProduct(id);
    this.router.navigate(['/brandy-catalog']);
  }

}
