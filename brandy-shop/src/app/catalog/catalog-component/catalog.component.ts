import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../shared/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products!: IProduct[];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts$().subscribe(res => {
      this.products = res;
    })
  }

  sortDefault() {
    let sort = this.products.sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
    this.products = sort;
  }

  sortToHightPrice() {
    let sort = this.products.sort((a, b) => a.price - b.price);
    this.products = sort;
  }

  sortToLowPrice() {
    let sort = this.products.sort((a, b) => b.price - a.price);
    this.products = sort;
  }

  sortAZ() {
    let sort = this.products.sort((a, b) => a.title.localeCompare(b.title));
    this.products = sort;
  }

  sortZA() {
    let sort = this.products.sort((a, b) => b.title.localeCompare(a.title));
    this.products = sort;
  }

  filter(from: number, to?: number) {

    this.productService.getProducts$().pipe(
      map(arr => arr.filter(p => 
        !to 
        ? p.price > from 
        : p.price > from && p.price <= to)
      ))
      .subscribe(arr => {
        this.products = arr;
      });

  }
}
