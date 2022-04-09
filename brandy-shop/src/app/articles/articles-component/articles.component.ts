import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesService } from '../../services/articles.service';
import { IArticle } from 'src/app/shared/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles$!: Observable<IArticle[]>;

  constructor(private articlesServices: ArticlesService) { }

  ngOnInit(): void {
    this.articles$ = this.articlesServices.getArticles$();
  }
}
