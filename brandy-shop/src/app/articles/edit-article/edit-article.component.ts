import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { IArticle } from 'src/app/shared/article';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  @Input() article!: IArticle;

  constructor(public articlesService: ArticlesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.articlesService.getArticle$(id).subscribe(a => this.article = a);
  }

  editHandler(): void {
    this.articlesService.updateArticle$(this.article);
    this.router.navigate(['/articles']);
  }
}
