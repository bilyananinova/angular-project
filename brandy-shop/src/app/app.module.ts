import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CatalogRoutingModule } from './catalog-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeArticleCardComponent } from './home-article-card/home-article-card.component';
import { CatalogModule } from './catalog.module';

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
    CatalogRoutingModule,
    CatalogModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    // AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
