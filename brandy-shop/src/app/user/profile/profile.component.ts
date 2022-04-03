import { Component, OnInit } from '@angular/core';
import { LikesService } from 'src/app/services/likes.service';
import { IProduct } from 'src/app/shared/product';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  products!: IProduct[];
  userId = localStorage.getItem('id') as string;

  constructor(private likesService: LikesService) { }

  ngOnInit(): void {
    this.likesService.getLikes(this.userId).subscribe(res => this.products = res);
  }

}
