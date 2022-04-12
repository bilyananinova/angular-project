import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CommentsService } from 'src/app/services/comments.service';
import { LikesService } from 'src/app/services/likes.service';
import { UserService } from 'src/app/services/user.service';
import { IComment } from 'src/app/shared/comment';
import { IProduct } from 'src/app/shared/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: IProduct = {} as IProduct;
  userId!: string;
  userId$: Observable<string | null> = this.userService.userId$;
  comments: IComment[] = [] as IComment[];

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private likeService: LikesService,
    private commentsService: CommentsService,
    public userService: UserService) {
    this.userId$.subscribe(user => {
      this.userId = !user ? '' : user
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.productsService.getProduct$(id).subscribe(p => {
      this.product = p;
      this.comments = this.product.comments;
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

  deleteHandler(id: string): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productsService.deleteProduct$(id).subscribe(() => console.log(`successfully delete product from catalog`));
      this.router.navigate(['/brandy-catalog']);
    }
  }

  comment(productId: string, value: IComment, form: NgForm): void {
    this.commentsService.postComment$(productId, value).subscribe(() => {
      form.reset();
      console.log(`successfully create a comment`);
    })
  }

}
