import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc, collection, collectionData, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { from, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public fbs: Firestore) { }

  getUserCart$(userId: string): Observable<IProduct[]> {
    let cartRef = collection(this.fbs, `cart ${userId}`);
    return collectionData(cartRef, { idField: 'id' }) as Observable<IProduct[]>;
  }

  addCart$(product: any, userId: string): Observable<any> {
    let cartRef = doc(this.fbs, `cart ${userId}`, product.id);
    return from(setDoc(cartRef, product)).pipe(
      catchError((error: Error) => throwError(error.message))
    );
  }

  updateCart$(product: any, userId: string, productId: string): Observable<any> {
    let cartRef = doc(this.fbs, `cart ${userId}`, productId);
    return from(updateDoc(cartRef, { qty: product.qty })).pipe(
      catchError((error: Error) => throwError(error.message))
    );
  }

  deleteFromCart$(userId: string, productId: string): Observable<any> {
    let cartRef = doc(this.fbs, `cart ${userId}`, productId);
    return from(deleteDoc(cartRef));
  }
}
