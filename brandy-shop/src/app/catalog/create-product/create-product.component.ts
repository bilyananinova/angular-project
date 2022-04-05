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

  constructor(public productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  createHandle(value: IProduct): void {

    if (value.title != '' && value.description != '' && value.price && value.image != '') {

      this.productsService.createProduct$(value);
      this.router.navigate(['/brandy-catalog']);
    } else {
      alert('All fields are required!');
    }
  }
}
