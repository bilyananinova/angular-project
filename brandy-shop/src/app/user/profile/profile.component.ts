import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LikesService } from 'src/app/services/likes.service';
import { UserService } from 'src/app/services/user.service';
import { IProduct } from 'src/app/shared/product';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  products$!: Observable<IProduct[]>;
  userId!: string;
  userId$: Observable<string | null> = this.userService.userId$;

  constructor(private likesService: LikesService, private userService: UserService) { }

  ngOnInit(): void {
    this.userId$.subscribe(u => {
      if (u) {
        this.userId = u;
      }
      this.products$ = this.likesService.getLikes$(this.userId);
    });
  }

}
