import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { IArticle } from 'src/app/shared/article';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  constructor(public articlesService: ArticlesService, private router: Router) { }

  ngOnInit(): void {
  }

  createHandle(value: IArticle): void {

    if (value.title != '' && value.content != '' && value.image != '') {

      this.articlesService.createArticle$(value);
      this.router.navigate(['/articles']);
    } else {
      alert('All fields are required!');
    }
  }

}
