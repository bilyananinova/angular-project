import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(public productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  createHandle(value: any) {

    if (value.title != '', value.description != '', value.price != '', value.image != '') {

      this.productsService.createProduct(value.title, value.description, +value.price, value.image);
      this.router.navigate(['/brandy-catalog'])
    } else {
      alert('All fields are required!');
    }
  }
}
