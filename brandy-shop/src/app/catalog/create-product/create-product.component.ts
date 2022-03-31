import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/shared/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product!: IProduct;

  constructor(public productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  createHandle(value: IProduct) {

    this.product = value;

    if (this.product.title != '' && this.product.description != '' &&  this.product.price != 0 &&  this.product.image != '') {

      this.productsService.createProduct(this.product);
      this.router.navigate(['/brandy-catalog']);
    } else {
      alert('All fields are required!');
    }
  }
}
