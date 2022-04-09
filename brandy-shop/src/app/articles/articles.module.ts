import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles-component/articles.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleCardComponent } from './article-card/article-card.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { EditArticleComponent } from './edit-article/edit-article.component';


@NgModule({
  declarations: [
    ArticlesComponent,
    CreateArticleComponent,
    ArticleCardComponent,
    ArticleDetailsComponent,
    EditArticleComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    ArticlesComponent,
    CreateArticleComponent
  ]
})
export class ArticlesModule { }
