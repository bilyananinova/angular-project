import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/shared/article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article!: IArticle;
  userId = localStorage.getItem('id') as string;

  constructor() { }

  ngOnInit(): void {
  }

}
