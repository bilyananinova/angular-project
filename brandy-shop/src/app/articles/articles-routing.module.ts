import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { AuthGuard } from '../guards/auth.guard';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticlesComponent } from './articles-component/articles.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ArticlesComponent
  },
  {
    path: 'create-article',
    component: CreateArticleComponent,
    canActivate: [AdminGuard, AuthGuard]
  },
  {
    path: ':id/edit',
    component: EditArticleComponent,
    canActivate: [AdminGuard, AuthGuard]
  },
  {
    path: ':id',
    component: ArticleDetailsComponent
  }  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
