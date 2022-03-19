import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result: [] = []
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(p => {
      p.forEach((doc: IProduct) => {

       console.log(doc);
       
        
      });

    })
  }

}
