import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc, query, orderBy } from '@angular/fire/firestore';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IArticle } from '../shared/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(public fbs: Firestore) { }

  getArticles$(): Observable<IArticle[]> {
    let articlesRef = collection(this.fbs, 'articles');
    let queryString = query(articlesRef, orderBy("createdAt", "desc"));
    return collectionData(queryString, { idField: 'id' }) as Observable<IArticle[]>;
  }

  getArticle$(id: string): Observable<IArticle> {
    let articleRef = doc(this.fbs, 'articles', id);
    return docData(articleRef, { idField: 'id' }) as Observable<IArticle>;
  }

  createArticle$(article: IArticle): Observable<any> {
    let articleRef = collection(this.fbs, 'articles');
    return from(addDoc(articleRef, {
      title: article.title,
      content: article.content,
      image: article.image,
      createdAt: Date.now(),
    })).pipe(
      catchError((error: Error) => throwError(error.message))
    );
  }

  updateArticle$(article: IArticle): Observable<any> {

    let articleRef = doc(this.fbs, 'articles', article.id);
    return from(updateDoc(articleRef, {
      title: article.title,
      content: article.content,
      image: article.image
    })).pipe(
      catchError((error: Error) => throwError(error.message))
    );
  }

  deleteArticle$(id: string): Observable<any> {
    let articleRef = doc(this.fbs, 'articles', id);
    return from(deleteDoc(articleRef));
  }
}
