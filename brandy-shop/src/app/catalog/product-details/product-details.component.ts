import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/product';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product!: IProduct;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.productsService.getProduct(id).subscribe(p => {
      this.product = p;
    })

  }

  deleteHandler(id: string) {
    this.productsService.deleteProduct(id);
    this.router.navigate(['/brandy-catalog']);
  }

}
