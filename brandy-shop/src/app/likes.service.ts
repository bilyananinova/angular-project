import { Injectable } from '@angular/core';
import { Firestore, doc, updateDoc, arrayUnion, arrayRemove } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  constructor(public fbs: Firestore) { }

  likeProduct(productId: string, userId: string) {
    let userRef = doc(this.fbs, "users", userId);
    let productRef = doc(this.fbs, "brandy", productId);

    updateDoc(userRef, {
      likes: arrayUnion(productId)
    });

    updateDoc(productRef, {
      likes: arrayUnion(productId)
    });
  }

  dislikeProduct(productId: string, userId: string) {
    let userRef = doc(this.fbs, "users", userId);
    let productRef = doc(this.fbs, "brandy", productId);

    updateDoc(userRef, {
      dislikes: arrayUnion(productId)
    });

    updateDoc(productRef, {
      dislikes: arrayUnion(productId)
    });
  }
}
