import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../shared/product';


@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  @Input() product!: IProduct;
  
  constructor() { }

  ngOnInit(): void {

  }

}
