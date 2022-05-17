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

  onChange(val: any): IProduct[] {
    let sort = [];

    if (val.value === 'sortDefault') {
      sort = this.products.sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
      this.products = sort;
    };

    if (val.value === 'sortToHightPrice') {
      sort = this.products.sort((a, b) => a.price - b.price);
      console.log(sort);

      this.products = sort;
    }

    if (val.value === 'sortToLowPrice') {
      sort = this.products.sort((a, b) => b.price - a.price);
      this.products = sort;
    }

    if (val.value === 'sortAZ') {
      sort = this.products.sort((a, b) => a.title.localeCompare(b.title));
      this.products = sort;
    }

    if (val.value === 'sortZA') {
      sort = this.products.sort((a, b) => b.title.localeCompare(a.title));
      this.products = sort;
    }

    return this.products
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
