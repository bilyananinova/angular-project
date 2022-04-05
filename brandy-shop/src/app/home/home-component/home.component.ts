import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../shared/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getLastProducts$().subscribe(p => this.products = p);
  }
}
