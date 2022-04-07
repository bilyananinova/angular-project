import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../shared/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products$!: Observable<IProduct[]>;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts$();
  }

}
