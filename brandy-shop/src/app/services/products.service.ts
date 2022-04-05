import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc, query, orderBy, limit } from '@angular/fire/firestore';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public fbs: Firestore) { }

  getProducts$(): Observable<IProduct[]> {
    let productRef = collection(this.fbs, 'brandy');
    let queryString = query(productRef, orderBy("createdAt", "desc"));
    return collectionData(queryString, { idField: 'id' }) as Observable<IProduct[]>;
  }

  getLastProducts$(): Observable<IProduct[]> {
    let productRef = collection(this.fbs, 'brandy');
    let queryString = query(productRef, orderBy("createdAt", "desc"), limit(3));
    return collectionData(queryString, { idField: 'id' }) as Observable<IProduct[]>;
  }

  getProduct$(id: string): Observable<IProduct> {
    let productDocRef = doc(this.fbs, 'brandy', id);
    return docData(productDocRef, { idField: 'id' }) as Observable<IProduct>;
  }

  createProduct$(product: IProduct): Observable<any> {
    let productRef = collection(this.fbs, 'brandy');
    return from(addDoc(productRef, {
      title: product.title,
      description: product.description,
      price: +product.price  || 0,
      image: product.image,
      comments: [],
      likes: [],
      dislikes: [],
      createdAt: Date.now(),
      qty: 1,
    })).pipe(
      catchError((error: Error) => throwError(error.message))
    );
  }

  updateProduct$(product: IProduct): Observable<any> {

    let productDocRef = doc(this.fbs, 'brandy', product.id);
    return from(updateDoc(productDocRef, {
      title: product.title,
      description: product.description,
      price: +product.price || 0,
      image: product.image
    })).pipe(
      catchError((error: Error) => throwError(error.message))
    );
  }

  deleteProduct$(id: string): Observable<any> {
    let productDocRef = doc(this.fbs, 'brandy', id);
    return from(deleteDoc(productDocRef));
  }
}
