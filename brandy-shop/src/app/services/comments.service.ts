import { Injectable } from '@angular/core';
import { Firestore, doc, updateDoc, arrayUnion } from '@angular/fire/firestore';
import { IComment } from '../shared/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(public fbs: Firestore) {}

  postComment(productId: string, content: IComment) {
    let productRef = doc(this.fbs, "brandy", productId);
    console.log(content);
    
    updateDoc(productRef, {
      comments: arrayUnion({
        author: content.author || "Anonymous",
        content: content.content,
        createdAt: Date.now()        
      })
    });
  }
}
