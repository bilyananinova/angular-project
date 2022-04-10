import { Injectable } from '@angular/core';
import { Firestore, doc, updateDoc, arrayUnion, query, where, collection, collectionData, arrayRemove } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  constructor(public fbs: Firestore) { }

  likeProduct(productId: string, userId: string): void {
    let userRef = doc(this.fbs, "users", userId);
    let productRef = doc(this.fbs, "brandy", productId);

    updateDoc(userRef, {
      likes: arrayUnion(productId),
      dislikes: arrayRemove(productId)
    });

    updateDoc(productRef, {
      likes: arrayUnion(userId),
      dislikes: arrayRemove(userId)
    });
  }

  dislikeProduct(productId: string, userId: string): void {
    let userRef = doc(this.fbs, "users", userId);
    let productRef = doc(this.fbs, "brandy", productId);

    updateDoc(userRef, {
      dislikes: arrayUnion(productId),
      likes: arrayRemove(productId)
    });

    updateDoc(productRef, {
      dislikes: arrayUnion(userId),
      likes: arrayRemove(userId)
    });
  }

  getLikes$(userId: string): Observable<IProduct[]> {
    let productRef = collection(this.fbs, 'brandy')
    let queryString = query(productRef, where('likes', 'array-contains', userId));
    return collectionData(queryString, { idField: 'id' }) as Observable<IProduct[]>;
  }

}
