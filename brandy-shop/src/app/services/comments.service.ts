import { Injectable } from '@angular/core';
import { Firestore, doc, updateDoc, arrayUnion } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { IComment } from '../shared/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(public fbs: Firestore) { }

  postComment(productId: string, content: IComment): Observable<any> {
    let productRef = doc(this.fbs, 'brandy', productId);

    return from(updateDoc(productRef, {
      comments: arrayUnion({
        author: content.author || "Anonymous",
        content: content.content,
        createdAt: Date.now()
      })
    }));
  }
}
