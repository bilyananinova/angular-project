import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @Input() product!: IProduct;

  constructor(public productsService: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.productsService.getProduct(id).subscribe(p => this.product = p);
  }

  editHandler(): void {
    this.productsService.updateProduct(this.product);
    this.router.navigate(['/brandy-catalog']);
  }

}
