import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { UserService } from 'src/app/services/user.service';
import { IArticle } from 'src/app/shared/article';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {


  @Input() article!: IArticle;


  constructor(
    private articlesServices: ArticlesService, private route: ActivatedRoute, private router: Router, public userService: UserService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.articlesServices.getArticle$(id).subscribe(p => {
      this.article = p;
    });
  }

  deleteHandler(id: string): void {
    if (confirm('Are you sure you want to delete this article?')) {
      this.articlesServices.deleteArticle$(id);
      this.router.navigate(['/articles']);
    }
  }

}
