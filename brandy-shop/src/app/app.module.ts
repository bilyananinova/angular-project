import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { HomeArticleCardComponent } from './home/home-article-card/home-article-card.component';
import { CatalogRoutingModule } from './catalog/catalog-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeArticleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CatalogRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
