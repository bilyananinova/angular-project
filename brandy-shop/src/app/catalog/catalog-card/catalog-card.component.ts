import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../shared/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.css']
})
export class CatalogCardComponent implements OnInit {

  @Input() product!: IProduct;
  
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  deleteHandler(id: string) {
    this.productsService.deleteProduct(id)
  }
}
