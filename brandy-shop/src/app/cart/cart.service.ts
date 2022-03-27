import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc, collection, collectionData, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public fbs: Firestore) { }

  getUserCart(userId: string): Observable<IProduct[]> {
    let cartRef = collection(this.fbs, `cart ${userId}`);
    return collectionData(cartRef, { idField: 'id' }) as Observable<IProduct[]>;
  }

  addCart(product: any, userId: string) {

    setDoc(doc(this.fbs, `cart ${userId}`, product.id),
      product
    )
      .then(product => {
        console.log('successfully added to cart');
        return product;
      })
      .catch(err => {
        console.error(err);
      })
  }

  updateCart(product: any, userId: string, productId: string) {
    let cartRef = doc(this.fbs, `cart ${userId}`, productId);

    return updateDoc(cartRef, {
      qty: product.qty 
    })
      .catch(err => {
        console.error(err);
        throw err;
      })
  }

  deleteFromCart(userId: string, productId: string) {
    let cartRef = doc(this.fbs, `cart ${userId}`, productId);
    return deleteDoc(cartRef);
  }
}
