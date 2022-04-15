import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../shared/product';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  keyframes
} from '@angular/animations';


@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
  animations: [
    trigger('fadeIn', [ // animations happen after what triggers them
      transition(':enter', [ // tells Angular how it should apply the specified CSS  
        query('.home-product', // apply to a group of elements all at once with the same trigger
          style({ opacity: 0 }), // specify what styles to apply to the target element
        ),
        query('.home-product',
          // specifies the duration and any additional CSS animation
          // keyframes allow us to build an animation in multiple steps
          animate('900ms linear', keyframes([
            // style({ opacity: 0, transform: 'translateY(100%)' }),
            // style({ opacity: 0.5, transform: 'translateY(50%)' }),
            // style({ opacity: 1, transform: 'translateY(0)' })
            style({ opacity: 0 }),
            style({ opacity: 0.5 }),
            style({ opacity: 1 })
          ])
          )
        )
      ])
    ])
  ]
})
export class HomeCardComponent implements OnInit {

  @Input() product!: IProduct;

  constructor() { }

  ngOnInit(): void {

  }

}
